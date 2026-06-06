# Feedback Servos

Feedback servos can be one of two types: `NextFeedbackServo` or `NextFeedbackCRServo`. These wrap respectively a `NextServo` and a `NextCRServo`. They allow you to read the position of the servo from the 4th analog pin (e.g. Axon servo).

## NextFeedbackServo

### Declarations

:::tabs key:code

== Kotlin
```kotlin
NextFeedbackServo("servo_name", "feedback_name")

// For direct hardware access
NextFeedbackServo(module, port, "feedback_name")
```

== Java
```java
new NextFeedbackServo("servo_name", "feedback_name");

// For direct hardware access
new NextFeedbackServo(module, port, "feedback_name");
```

:::

With cache tolerance (default 0.01):

:::tabs key:code

== Kotlin
```kotlin
NextFeedbackServo("servo_name", "feedback_name", cacheTolerance)
NextFeedbackServo(module, port, "feedback_name", cacheTolerance)
```

== Java
```java
new NextFeedbackServo("servo_name", "feedback_name", cacheTolerance);
new NextFeedbackServo(module, port, "feedback_name", cacheTolerance);
```

:::

## NextFeedbackCRServo

### Declarations

:::tabs key:code

== Kotlin
```kotlin
NextFeedbackCRServo("servo_name", "feedback_name")

// For direct hardware access
NextFeedbackCRServo(module, port, "feedback_name")
```

== Java
```java
new NextFeedbackCRServo("servo_name", "feedback_name");

// For direct hardware access
new NextFeedbackCRServo(module, port, "feedback_name");
```

:::

With cache tolerance (default 0.01):

:::tabs key:code

== Kotlin
```kotlin
NextFeedbackCRServo("servo_name", "feedback_name", cacheTolerance)
NextFeedbackCRServo(module, port, "feedback_name", cacheTolerance)
```

== Java
```java
new NextFeedbackCRServo("servo_name", "feedback_name", cacheTolerance);
new NextFeedbackCRServo(module, port, "feedback_name", cacheTolerance);
```

:::
### Features

Both `NextFeedbackServo` and `NextFeedbackCRServo` contain the variable `angle` which returns the physical angle as a typed `Angle` in radians:

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
var totalAngle = 0.0
var previousAngle = 0.0

fun updateAngle() {
    val current = crServo.angle.rawValue
    var delta = current - previousAngle
    if (delta > Math.PI) delta -= 2 * Math.PI
    else if (delta < -Math.PI) delta += 2 * Math.PI
    totalAngle += delta
    previousAngle = current
}
```

== Java
```java
double totalAngle = 0.0;
double previousAngle = 0.0;

void updateAngle() {
    double current = crServo.getAngle().getRawValue();
    double delta = current - previousAngle;
    if (delta > Math.PI) delta -= 2 * Math.PI;
    else if (delta < -Math.PI) delta += 2 * Math.PI;
    totalAngle += delta;
    previousAngle = current;
}
```

:::