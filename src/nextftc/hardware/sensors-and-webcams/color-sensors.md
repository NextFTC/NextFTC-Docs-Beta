# Color Sensor

`NextColorDistanceSensor` wraps a `NormalizedColorSensor` and an optional `DistanceSensor` providing color and distance readings with support for color matching in multiple color spaces.

## Declarations

:::tabs key:code

== Kotlin
```kotlin
// Color only
val sensor = NextColorDistanceSensor("sensor_name")

// With distance
val sensor = NextColorDistanceSensor("sensor_name", true)
```

== Java
```java
// Color only
NextColorDistanceSensor sensor = new NextColorDistanceSensor("sensor_name");

// With distance
NextColorDistanceSensor sensor = new NextColorDistanceSensor("sensor_name", true);
```

:::

## Usage

**Call `update()` once per loop before reading any values:**

:::tabs key:code

== Kotlin
```kotlin
override fun periodic() {
    sensor.update()
}
```

== Java
```java
@Override
public void periodic() {
    sensor.update();
}
```

:::


## ColorProfile
`ColorProfile` defines a target color and tolerances for that target color. HSV is recommended because it is more stable under different lighting conditions, however RGB is also supported.


:::tabs key:code

== Kotlin
```kotlin
val green = ColorProfile(
    space = ColorSpace.HSV, //Desired Color Space (.HSV and .RGB both work)
    color = NextColor.hsv(130f, 0.7f, 0.6f), //The target color you want (use desired space)
    tolerance = NextColor.hsv(20f, 0.3f, 1f), //The tolerance of the target (use desired space)
)

override fun periodic() {
    sensor.update()
    if (sensor.isColor(green)) { ... } 
}
```
In this example, `.isColor(green)` returns true if the detected color falls within the target color's tolerance and false otherwise.

== Java
```java
ColorProfile green = new ColorProfile(
    ColorSpace.HSV, //Desired Color Space (.HSV and .RGB both work)
    NextColor.hsv(130f, 0.7f, 0.6f), //The target color you want (use desired space)
    NextColor.hsv(20f, 0.3f, 1f) //The tolerance of the target (use desired space)
);

@Override
public void periodic() {
    sensor.update();
    if (sensor.isColor(green)) { ... }
}
```
In this example, `.isColor(green)` returns true if the detected color falls within the target color's tolerance and false otherwise. 
:::

You can use [`debug()`](./color-sensors.md#debug) to calibrate a target color and determine appropriate tolerance values.


### Color and Distance Features

See [Distance Sensor](./distance-sensors.md#usage) for usage of distance methods, `NextColorDistanceSensor` exposes the same methods.

:::tabs key:code

== Kotlin
```kotlin
// Checks if the reading is within the tolerance of green
val isGreen = sensor.isColor(green)

// Checks if the reading is within the tolerance of green and the object is within 4 cm
val isCloseToGreen = sensor.isColorWithinDistance(green, 4.0)

// Checks if the reading is within the tolerance of green and the object is within 2 inches
val isCloseToGreenInches = sensor.isColorWithinDistance(green, 2.0, DistanceUnit.INCH)
```
Any distance features will use centimeters by default

== Java
```java
// Checks if the reading is within the tolerance of green
boolean isGreen = sensor.isColor(green);

// Checks if the reading is within the tolerance of green and the object is within 4 cm
boolean isCloseToGreen = sensor.isColorWithinDistance(green, 4.0);

// Checks if the reading is within the tolerance of green and the object is within 2 inches
boolean isCloseToGreenInches = sensor.isColorWithinDistance(green, 2.0, DistanceUnit.INCH);
```

Any distance features will use centimeters by default
:::

### Debug

You can use `debug()` in telemetry to calibrate a `ColorProfile`:

:::tabs key:code

== Kotlin
```kotlin
// Outputs: RGB=(r,g,b) HSV=(h,s,v) Dist=d
telemetry.addLine(sensor.debug())
```

== Java
```java
// Outputs: RGB=(r,g,b) HSV=(h,s,v) Dist=d
telemetry.addLine(sensor.debug());
```

:::

