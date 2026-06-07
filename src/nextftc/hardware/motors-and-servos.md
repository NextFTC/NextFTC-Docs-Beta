# Introduction

## Hardware
NextFTC provides wrappers for common FTC hardware devices, including motors, servos, sensors, etc.

These wrappers are designed to be easier to use and include several built-in features.
Hardware devices are lazily initialized; this mean they can be constructed before the OpMode is even initialized.
Writes are also cached to prevent unnecessary hardware calls with a default value of 0.01.
Simply, this means updates are only sent when the value changes by more than 0.01 or your desired value.

### Motor and Servos
- [Servos](./motors-and-servos/servos.md)
- [Continuous Rotation Servos](./motors-and-servos/cr-servos.md)
- [Feedback Servos](./motors-and-servos/feedback-servos.md)
- [Motors](./motors-and-servos/motors.md)

### Sensors
- [Color Sensor](./sensors-and-webcams/color-sensors.md)
- [Distance Sensor](./sensors-and-webcams/distance-sensosr.md)
- [Digital Sensor](./sensors-and-webcams/digital-sensors.md)

### Webcams
- [Limelight](./sensors-and-webcams/limelight.md)
- [HuskyLens](./sensors-and-webcams/huskylens.md)