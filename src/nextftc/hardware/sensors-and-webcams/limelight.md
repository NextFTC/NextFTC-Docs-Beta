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

Returns the straight-line distance (hypotenuse) to an AprilTag as a [Distance](/nextftc/concepts/units.md) or `null` if no valid tag is available.
If no unit is specified, inches are used by default.

:::tabs key:code

== Kotlin
```kotlin
val dist = limelight.getDistance() ?: return // default: inches
val cm = limelight.getDistance(Centimeters) ?: return
val ft20 = limelight.getDistance(Feet, id = 20) ?: return // tag 20, and in Ft
```

== Java
```java
Distance dist = limelight.getDistance(); // default: inches
if (dist == null) return;
    
Distance cm = limelight.getDistance(Centimeters);
if (cm == null) return;

Distance ft20 = limelight.getDistance(Feet, 20); // tag 20, and in Ft
if (ft20 == null) return;
```
:::
If a specific ID is not given the distance will be calculated using any detected april tag.


## Relocalization

`getPose()`and `getPedroPose()` returns the robot's field position as a `Pose2d` in [FTC Coordinate System](https://ftc-docs.firstinspires.org/en/latest/game_specific_resources/field_coordinate_system/field-coordinate-system.html) and [Pedro coordinates](https://pedropathing.com/docs/pathing/reference/coordinates) respectively, or `null` if no valid pose is available. 

:::tabs key:code

== Kotlin
```kotlin
val pose = limelight.getPedroPose() ?: return
// or 
val pose = limelight.getPose() ?: return
```
This method uses any detected AprilTag. It is recommended to exclude unwanted tags in the Limelight pipeline.

== Java
```java
Pose2d pose = limelight.getPedroPose();
// or 
Pose2d pose = limelight.getPose();
if (pose == null) return;
```
This method uses any detected AprilTag. It is recommended to exclude unwanted tags in the Limelight pipeline.
:::