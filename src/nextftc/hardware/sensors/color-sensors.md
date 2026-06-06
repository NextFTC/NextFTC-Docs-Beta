# Color Sensor

`NextColorDistanceSensor` wraps a `NormalizedColorSensor` and an optional `DistanceSensor` to allow for color and distance readings; with the ability to use color matching in different color spaces.

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


### Distance

See [Distance Sensor](./distance-sensors.md#usage) for usage — `NextColorDistanceSensor` exposes the same methods.


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

## ColorProfile

`ColorProfile` describes a target color and per-channel tolerances. HSV is recommended as it is more stable under different lighting conditions.

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

:::
