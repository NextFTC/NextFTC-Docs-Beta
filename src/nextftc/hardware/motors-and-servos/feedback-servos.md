# Feedback Servos

Feedback servos can be one of two types: `NextFeedbackServo` or `NextFeedbackCRServo`. These wrap respectively a `NextServo` and a `NextCRServo`. They allow you to read the position of the servo from the 4th analog wire from servos (e.g. Axon servo).

## NextFeedbackServo

### Declarations

:::tabs key:code

== Kotlin
```kotlin
val servo = NextFeedbackServo("servo_name", "feedback_name")

// For direct hardware access
val servo = NextFeedbackServo(module, port, "feedback_name")
```

== Java
```java
NextFeedbackServo servo = new NextFeedbackServo("servo_name", "feedback_name");

// For direct hardware access
NextFeedbackServo servo = new NextFeedbackServo(module, port, "feedback_name");
```

:::

With cache tolerance (default 0.01):

:::tabs key:code

== Kotlin
```kotlin
val servo = NextFeedbackServo("servo_name", "feedback_name", cacheTolerance)
val servo = NextFeedbackServo(module, port, "feedback_name", cacheTolerance)
```

== Java
```java
NextFeedbackServo servo = new NextFeedbackServo("servo_name", "feedback_name", cacheTolerance);
NextFeedbackServo servo = new NextFeedbackServo(module, port, "feedback_name", cacheTolerance);
```

:::

## NextFeedbackCRServo

### Declarations

:::tabs key:code

== Kotlin
```kotlin
val servo = NextFeedbackCRServo("servo_name", "feedback_name")

// For direct hardware access
val servo = NextFeedbackCRServo(module, port, "feedback_name")
```

== Java
```java
NextFeedbackServo servo = new NextFeedbackCRServo("servo_name", "feedback_name");

// For direct hardware access
NextFeedbackServo servo = new NextFeedbackCRServo(module, port, "feedback_name");
```

:::

With cache tolerance (default 0.01):

:::tabs key:code

== Kotlin
```kotlin
val servo = NextFeedbackCRServo("servo_name", "feedback_name", cacheTolerance)
val servo = NextFeedbackCRServo(module, port, "feedback_name", cacheTolerance)
```

== Java
```java
NextFeedbackServo servo = new NextFeedbackCRServo("servo_name", "feedback_name", cacheTolerance);
NextFeedbackServo servo = new NextFeedbackCRServo(module, port, "feedback_name", cacheTolerance);
```

:::
### Features

Both `NextFeedbackServo` and `NextFeedbackCRServo` contain the variable `angle` which returns the physical angle as a typed [`Angle`](../../concepts/units.md#angle) in radians:

:::tabs key:code

== Kotlin
```kotlin
val current: Angle = servo.angle
```

== Java
```java
Angle current = servo.getAngle();
```


:::

## Example Tracking
This code would result in the tracked position of the servo (beyond 0 to 2 pi). This is incredibly useful for `NextCRServo`. However be warned that the analog wrap may cause issues, but this is merely an example.


:::tabs key:code

== Kotlin
```kotlin
var totalAngle = 0.0 // This is your angle of the servo
var previousAngle = 0.0 // This is the previous loop's servo position

fun updateAngle() {
    val current = crServo.angle
    var delta = current - previousAngle
    if (delta > Math.PI) delta -= 2 * Math.PI
    else if (delta < -Math.PI) delta += 2 * Math.PI
    totalAngle += delta
    previousAngle = current
}
```

== Java
```java
double totalAngle = 0.0; // This is your angle of the servo
double previousAngle = 0.0; // This is the previous loop's servo position

void updateAngle() {
    double current = crServo.getAngle();
    double delta = current - previousAngle;
    if (delta > Math.PI) delta -= 2 * Math.PI;
    else if (delta < -Math.PI) delta += 2 * Math.PI;
    totalAngle += delta;
    previousAngle = current;
}
```

:::