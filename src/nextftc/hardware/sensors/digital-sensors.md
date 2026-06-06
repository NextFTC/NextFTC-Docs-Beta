# Digital Sensor

`NextDigitalSensor` wraps a `DigitalChannel` for reading digital sensors like limit switches, magnetic switches,
and beam breaks.


## Declarations
Most digital sensors are "active low" which means they read `false` 
when triggered and `true` when idle. `NextDigitalSensor` handles this inversion automatically, 
though it can be reverted if needed. Check your specific sensor specs for more info on it.


:::tabs key:code

== Kotlin
```kotlin
val sensor = NextDigitalSensor("sensor_name")

// Not inverted means active true
val sensor = NextDigitalSensor("sensor_name", inverted = false)
```

== Java
```java
NextDigitalSensor sensor = new NextDigitalSensor("sensor_name");

// Not inverted
NextDigitalSensor sensor = new NextDigitalSensor("sensor_name", false);
```

:::

## Usage
`isTriggered` returns true when the sensor is activated, and `rawState` returns the raw state of the sensor
(raw state does not account for inversion).

:::tabs key:code

== Kotlin
```kotlin
if (sensor.isTriggered) { ... }

// Raw state if needed
val raw = sensor.rawState
```

== Java
```java
if (sensor.isTriggered()) { ... }

// Raw state if needed
boolean raw = sensor.getRawState();
```

:::

### Debug
Use `debug()` in telemetry to see the current triggered state, raw state, and whether inversion is enabled. 
This is useful for verifying your sensor is wired and configured correctly.


:::tabs key:code

== Kotlin
```kotlin
// Outputs: Sensor State: boolean, Raw State: boolean, Inverted: boolean
telemetry.addLine(sensor.debug())
```

== Java
```java
// Outputs: Sensor State: boolean, Raw State: boolean, Inverted: boolean
telemetry.addLine(sensor.debug());
```

:::