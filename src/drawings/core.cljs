(ns drawings.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 1)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  ;; {:tree-lines (tree-lines (/ (q/width) 2.0) (q/height))})
  {})

(defn tree-lines [x y amp beg-space]

  ;; (partition
  ;;   4
  ;;   (flatten
  ;;     (for [i (range 50 250 0.1)]
  ;;       [i
  ;;        (- 250
  ;;        (-> i
  ;;            (* 0.01)
  ;;
  ;;            q/sin
  ;;            (* 100)
  ;;            ))
  ;;        ]
  ;;       ))))

  (->>
    (let []
      (loop [vertices-layers [[[x y]] [[x (- y 10)]]]
             space beg-space
             depth 0]
        (if (> depth 9)
          vertices-layers
          (let [top-vertices (last vertices-layers)
                new-top-vertices
                (apply
                  concat
                  (mapv (fn [[x y]]
                          (let [a (+ space
                                     (q/random 0)
                                     )
                                bf #(+ (* amp
                                       (q/sin (* 3.14 (/ % (q/width))))
                                       )
                                       (q/random 5)
                                       )
                                lx (- x a)
                                rx (+ x a)]
                          [[lx (- y (bf lx))]
                           [rx (- y (bf rx))]]))
                        top-vertices))]
            (recur
              (conj vertices-layers new-top-vertices)
              (* 0.5 space)
              (inc depth))))))
    (partition 2 1)
    (map (fn [[layer1 layer2]]
           (mapv (fn [p1 p2]
                   (concat p1 p2))
                 (interleave layer1 layer1)
                 layer2)))
    (apply concat)))

(defn update-state [state]
  {:tree-lines (concat (tree-lines (/ (q/width) 2.0) (q/height) 30 75)
                       )})
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
