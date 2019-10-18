(ns drawings.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  ;; {:tree-lines (tree-lines (/ (q/width) 2.0) (q/height))})
  {})

(defn tree-lines [x y]
  (->>
    (let [middle 160
          bottom 300
          ]
      (loop [vertices-layers [[[middle bottom]]]
             depth 0]
        (if (> depth 5)
          vertices-layers
          (let [top-vertices (last vertices-layers)
                new-top-vertices
                (apply
                  concat
                  (mapv (fn [[x y]]
                          [[(- x 20 (q/random 5)) (- y (* 5 depth depth) (q/random 7))]
                           [(+ x 20 (q/random 5)) (- y (* 5 depth depth) (q/random 7))]])
                        top-vertices))]
            (recur
              (conj vertices-layers new-top-vertices)
              (inc depth))))))
    (partition 2 1)
    (map (fn [[layer1 layer2]]
           (for [p1 layer1
                 p2 layer2]
             (concat p1 p2))))
    (apply concat)))

(defn update-state [state]
  {:tree-lines (tree-lines (/ (q/width) 2.0) (q/height))})
  ;; state)

(defn draw-state [{:keys [tree-lines]}]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 140)
  (q/stroke-weight 0.3)
  (doseq [[x1 y1 x2 y2] tree-lines]
    (q/line x1 y1 x2 y2)))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch drawings
    :host "drawings"
    :size [js/window.innerWidth js/window.innerHeight]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
