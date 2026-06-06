# Distance Sensor

`NextDistanceSensor` wraps a `DistanceSensor` to allow for readings and includes useful features.

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

    val cm = sensor.distance()
    val inches = sensor.distance(DistanceUnit.INCH)

    if (sensor.isWithinDistance(2.0)) { ... }
    if (sensor.isWithinDistance(2.0, DistanceUnit.INCH)) { ... }
}
```

== Java
```java
@Override
public void periodic() {
    sensor.update();

    double cm = sensor.distance();
    double inches = sensor.distance(DistanceUnit.INCH);

    if (sensor.isWithinDistance(2.0)) { ... }
    if (sensor.isWithinDistance(2.0, DistanceUnit.INCH)) { ... }
}
```

:::