# Distance Sensor

`NextDistanceSensor` wraps a `DistanceSensor` and provides easy-to-use distance readings with built-in utility features.

## Declarations

:::tabs key:code

== Kotlin
```kotlin
val sensor = NextDistanceSensor("sensor_name")
```

== Java
```java
NextDistanceSensor sensor = new NextDistanceSensor("sensor_name");
```

:::

## Usage
**Call `update()` once per loop before reading any values:**

:::tabs key:code

== Kotlin
```kotlin
override fun periodic() {
    sensor.update()

    val cm = sensor.getDistance()
    val inches = sensor.getDistance(DistanceUnit.INCH)

    if (sensor.isWithinDistance(2.0)) { ... }
    if (sensor.isWithinDistance(2.0, DistanceUnit.INCH)) { ... }
}
```
`sensor.isWithinDistance(2.0)` returns true if the distance is within 2 cm, if a unit is specified, it will use that unit.

== Java
```java
@Override
public void periodic() {
    sensor.update();

    double cm = sensor.getDistance();
    double inches = sensor.getDistance(DistanceUnit.INCH);

    if (sensor.isWithinDistance(2.0)) { ... }
    if (sensor.isWithinDistance(2.0, DistanceUnit.INCH)) { ... }
}
```
`sensor.isWithinDistance(2.0)` returns true if the distance is within 2 cm, if a unit is specified, it will use that unit.
:::

Any distance features will use centimeters by default
