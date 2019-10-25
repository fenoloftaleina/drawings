(ns drawings.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn point-on [[x1 y1 x2 y2] fract]
  (let [ny (- y1 (* fract (- y1 y2)))
        a (/ (- y2 y1) (- x2 x1))
        b (- y1 (* a x1))
        nx (/ (- ny b) a)]
    [nx ny]))

(defn start-x [] (/ (q/width) 2.0))
(defn start-y [] (q/height))
(defn other-side [x] (+ (* x -1) (* 2 (start-x))))
(def max-hop 5)

(defn branches [{[x1 y1 x2 y2] :cur-line :keys [cur-line branch depth hops-to-make left lines]}]
  (let [cur-line [x1 y1 x2 y2]]
    ;; (if (zero? hops-to-make)
    (if (> depth max-hop)
      lines
      (apply
        concat
        (map
          (fn [hop]
            (let [fract-of-cur-line (-> hop (/ hops-to-make))
                  ;; the bigger the depth the shorter the branches
                  ;; the bigger the hop the shorter the branches
                  fract-of-length
                  ;; (if (> depth 1)
                  ;;   0
                    (-> hop
                        (/ hops-to-make)
                        ((partial - 1))
                        ;; (* branch)
                        (/ depth)
                        )
                    ;; )
                  [nx1 ny1] (point-on cur-line fract-of-cur-line)
                  nx2 (+ nx1
                         (* fract-of-length
                            (/ 100 branch)
                            (if left 1 -1)))
                  ny2 (- ny1
                         (* fract-of-length
                            (* 55 depth)))
                  ]
              (branches {:cur-line [nx1 ny1 nx2 ny2]
                         :branch (+ branch hop)
                         :depth (inc depth)
                         :hops-to-make (dec hops-to-make)
                         :left (not left)
                         :lines (-> lines
                                    (conj cur-line)
                                    (conj (-> cur-line
                                              (update 0 other-side)
                                              (update 2 other-side))))})))
          (range 1 (inc hops-to-make)))))))

(defn tree-lines [x y]
  (branches {:cur-line [x y (+ x 0.0001) (- y 150)]
             :branch 1
             :depth 1
             :hops-to-make max-hop
             :left true
             :lines []})
  #_(->>
    (let []
      (loop [lines-layers [[[x y x (- y 50)]]]
             span 100
             depth 0]
        (if (> depth 1)
          (partition 4 (flatten lines-layers))
          (let [next-lines-layers
                (reduce
                  (fn [acc [i [x1 y1 x2 y2]]]
                    (let [ny1 (- y1 (* 0.5 (- y1 y2)))
                          a (/ (- y2 y1) (- x2 x1))
                          b (- y1 (* a x1))
                          nx1 x1 #_(/ (- ny1 b) a)
                          ny2 (- ny1 20)
                          nx2 (+ nx1 15)]
                      (conj acc [[nx1 ny1 nx2 ny2]])))
                lines-layers
                (map-indexed (last lines-layers)))]
            (recur
              next-lines-layers
              (* span 0.3)
              (inc depth))))))))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 1)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:tree-lines (tree-lines (start-x) (start-y))})
  ;; {})

(defn update-state [state]
  ;; {:tree-lines (concat (tree-lines (/ (q/width) 2.0) (q/height))
  ;;                      )})
  state)

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
(run-sketch)
