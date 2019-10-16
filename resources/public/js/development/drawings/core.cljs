(ns drawings.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0
   :vertices []})

(defn update-state [{:keys [color angle vertices]}]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ color 0.9) 255)
   :angle (+ angle 0.01)
   :vertices (conj vertices
                   [(+ (* 450 (q/cos angle)) (q/random 0))
                    (+ (* 250 (q/sin (* angle (q/random 4)))) (q/random 0))])
   })

(defn draw-state [{:keys [color vertices]}]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (q/fill color 255 255)
  ; Move origin point to the center of the sketch.
  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]
    (doseq [[[x1 y1] [x2 y2]] (partition 2 vertices)]
      ; Draw the circle.
      (q/line x1 y1 x2 y2))))

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
