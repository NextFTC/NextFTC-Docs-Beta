# HuskyLens
`NextHuskyLens` wraps a `HuskyLens`, providing convenient methods for selecting algorithms and reading detecting objects.

## Declarations

:::tabs key:code

== Kotlin
```kotlin
val huskyLens = NextHuskyLens("husky_lens")
```

== Java
```java
NextHuskyLens huskyLens = new NextHuskyLens("husky_lens");
```

:::

## Usage

### Setup

Call `selectAlgorithm()` once on startup to set the recognition mode, and `knock()` to verify the sensor is responding:

:::tabs key:code

== Kotlin
```kotlin
huskyLens.selectAlgorithm(HuskyLens.Algorithm.TAG_RECOGNITION) // or any desired algorithm
val connected = huskyLens.knock()
```

== Java
```java
huskyLens.selectAlgorithm(HuskyLens.Algorithm.TAG_RECOGNITION); // or any desired algorithm
boolean connected = huskyLens.knock();
```

:::

### Blocks and Arrows

`blocks()` and `arrows()` return up to 6 currently visible results. Pass an ID to filter for a specific learned object.

:::tabs key:code

== Kotlin
```kotlin
val all = huskyLens.blocks()
val filtered = huskyLens.blocks(1)
```

== Java
```java
HuskyLens.Block[] all = huskyLens.blocks();
HuskyLens.Block[] filtered = huskyLens.blocks(1);
```
:::

