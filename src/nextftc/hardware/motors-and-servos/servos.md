# Servos

To control your servos, you can use NextFTC's `NextServo` class. A `NextServo`
wraps a `ServoImplEx`.

:::tabs key:code

== Kotlin

```kotlin
val servo = NextServo("servo_name")

//Alternatively
val servo = NextServo { servo }

// For direct hardware access
val servo = NextServo(module, port)
```

== Java

```java
NextServo servo = new NextServo("servo_name");

//Alternatively
NextServo servo = new NextServo(() -> servo);

// For direct hardware access
NextServo servo = new NextServo(module, port);
```

:::

Additionally, you can pass a position caching tolerance (defaults to 0.01):

:::tabs key:code

== Kotlin

```kotlin
val servo = NextServo("servo_name", cacheTolerance)
val servo = NextServo(cacheTolerance, { servo })
val servo = NextServo(module, port, cacheTolerance)
```

== Java

```java
NextServo servo = new NextServo("servo_name", cacheTolerance);
NextServo servo = new NextServo(cacheTolerance, () -> servo);
NextServo servo = new NextServo(module, port, cacheTolerance);
```

:::

## Usage

### Position

`position` ranges from 0.0 to 1.0:

:::tabs key:code

== Kotlin
```kotlin
servo.position = 0.0  // min position
servo.position = 0.5  // midpoint
servo.position = 1.0  // max position
```

== Java
```java
servo.setPosition(0.0);  // min position
servo.setPosition(0.5);  // midpoint
servo.setPosition(1.0);  // max position
```

:::

### PWM Range
Controls the min and max pulse width range(in microseconds) sent to the servo, which determines how far it can move.

:::tabs key:code

== Kotlin
```kotlin
servo.setPwmRange(500.0, 2500.0)

// set directly
servo.pwmRange = PwmControl.PwmRange(500.0, 2500.0)
```

== Java
```java
servo.setPwmRange(500.0, 2500.0);

// set directly
servo.setPwmRange(new PwmControl.PwmRange(500.0, 2500.0));
```

:::

### PWM Control
Controls whether the servo is actively receiving power or not.

:::tabs key:code

== Kotlin
```kotlin
servo.enable()   // enable PWM output
servo.disable()  // disable PWM output
```

== Java
```java
servo.enable();   // enable PWM output
servo.disable();  // disable PWM output
```

:::