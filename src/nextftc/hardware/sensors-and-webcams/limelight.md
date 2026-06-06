# Limelight

`NextLimelight` wraps a `Limelight3A`  making it easier to start the camera, switch pipelines, and retrieve robot pose and target data.


## Declarations

:::tabs key:code

== Kotlin
```kotlin
val limelight = NextLimelight("limelight")
```

== Java
```java
NextLimelight limelight = new NextLimelight("limelight");
```

:::

## Usage 

### Starting and Stopping

:::tabs key:code

== Kotlin
```kotlin
limelight.startReading(pipeline = 0)         // default 100 Hz
limelight.startReading(pipeline = 0, hz = 50)

limelight.stop()
```

== Java
```java
limelight.startReading(0); //sets pipeline to 0 and defaults 100 Hz
limelight.startReading(0, 50); //sets pipeline to 0 and 50 Hz

limelight.stop();
```

:::

### Distance

Returns the straight-line distance (hypotenuse) to an AprilTag.
If no unit is specified, inches are used by default.

:::tabs key:code

== Kotlin
```kotlin
val dist = limelight.getDistance() // default: inches
val cm = limelight.getDistance(DistanceUnit.CM)
val inches = limelight.getDistance(id = 20) // specific tag, inches
val cm3 = limelight.getDistance(DistanceUnit.CM, id = 3) 
```

== Java
```java
double dist = limelight.getDistance(); // default: inches
double cm = limelight.getDistance(DistanceUnit.CM);
double inches = limelight.getDistance(DistanceUnit.CM, 20); // specific tag, and in CM
```
:::
If a specfic ID is not given the distance will be calculated using any detected april tag.


## Relocalization

`getPedroPoseFromLimelight()` returns the robot's field position as a `Pose2d` in [Pedro coordinates](https://pedropathing.com/docs/pathing/reference/coordinates), or `null` if no valid pose is available.

:::tabs key:code

== Kotlin
```kotlin
val pose = limelight.getPedroPoseFromLimelight() ?: return
```
This method uses any detected AprilTag. It is recommended to exclude unwanted tags in the Limelight pipeline.

== Java
```java
Pose2d pose = limelight.getPedroPoseFromLimelight();
if (pose == null) return;
```
This method uses any detected AprilTag. It is recommended to exclude unwanted tags in the Limelight pipeline.
:::