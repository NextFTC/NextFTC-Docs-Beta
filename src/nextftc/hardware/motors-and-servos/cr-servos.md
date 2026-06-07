# Continuous Rotation Servos

`NextCRServo` wraps a `CRServoImplEx` exactly like a `NextServo` wraps a `ServoImplEx`, though you will be setting a power not a position.

## Declarations

You can declare `NextCRServo` in the following manner, much like a normal `NextServo`:

:::tabs key:code

== Kotlin
```kotlin
val crServo = NextCRServo("cr_servo_name")

// Alternatively 
val crServo = NextCRServo { crServoImplEx }

// For direct hardware access
val crServo = NextCRServo(module, port)

```

== Java
```java
NextCRServo crServo = new NextCRServo("cr_servo_name");

// Alternatively
NextCRServo crServo = new NextCRServo(() -> crServoImplEx);

// For direct hardware access
NextCRServo crServo = new NextCRServo(module, port);

```

:::

Additionally you can pass a cache tolerance (default is 0.01), exactly like a normal servo.

:::tabs key:code

== Kotlin
```kotlin
val  crServo = NextCRServo("cr_servo_name", cacheTolerance)
val  crServo = NextCRServo(cacheTolerance, { crServoImplEx  })
val  crServo = NextCRServo(module, port, cacheTolerance)
```
== Java
```java
NextCRServo crServo = new NextCRServo("cr_servo_name", cacheTolerance);
NextCRServo crServo = new NextCRServo(cacheTolerance, () -> crServoImplEx);
NextCRServo crServo = new NextCRServo(module, port, cacheTolerance);
```
:::

## Usage

`NextCRServo` has only a `power` property to set or get the power of the motor. Like a `MotorEx` the power can vary from -1 to 1.

:::tabs key:code

== Kotlin

```kotlin
crServo.power = 0.0 // To turn off
crServo.power = -1.0 // To spin in reverse fully
crServo.power = 0.5 // To spin forward half speed
```

== Java

```java
crServo.setPower(0.0);  // To turn off
crServo.setPower(-1.0); // To spin in reverse fully
crServo.setPower(0.5);  // To spin forward half speed
```

:::

### PWM Control
Controls whether the servo is actively receiving power or not.

:::tabs key:code

== Kotlin
```kotlin
crServo.enable()   // enable PWM output
crServo.disable()  // disable PWM output
```

== Java
```java
crServo.enable();   // enable PWM output
crServo.disable();  // disable PWM output
```

:::
