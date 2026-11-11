---
title: "How to Choose Graphics and FPS Settings for Android Games"
description: "Learn how to balance graphics quality, frame rate, device temperature and battery use when adjusting Android game settings."
section: android-gaming
contentType: game-settings
tags:
  - android gaming
  - graphics settings
  - FPS
  - frame rate
  - game performance
  - mobile gaming
authorId: tgg-hub
testingDisclosure: "Research-based guide using Android Developers documentation. No device-specific benchmark, graphics comparison or hands-on game test is claimed. Available settings and their performance impact vary by game and device."
sources:
  - https://developer.android.com/quality/technical
  - https://developer.android.com/topic/performance/issues/slow-session
  - https://developer.android.com/games/optimize/power
  - https://support.google.com/googleplay/android-developer/answer/9886355?hl=en
status: draft
---

# How to Choose Graphics and FPS Settings for Android Games

Opening a mobile game's graphics menu can leave you with several choices.

Should you select High graphics? Is Ultra FPS worth enabling? Should you lower the resolution? What happens when you choose a higher frame-rate option?

There is no universal configuration that works best on every Android phone.

The right settings depend on your device, the game, the type of experience you prefer and how much performance your phone can sustain.

The objective is not simply to make the game look as detailed as possible or display the highest FPS number. It is to find a configuration that delivers a consistently good experience.

## 1. Understand graphics quality and frame rate

Graphics quality and frame rate are related, but they control different aspects of gameplay.

### Graphics quality

Graphics settings determine how much visual detail the game attempts to render.

Depending on the game, available options may include:

- Texture quality.
- Shadow quality.
- Lighting and reflections.
- Anti-aliasing.
- Visual effects.
- Rendering resolution or resolution scale.
- Environmental and object detail.

Higher graphics settings can make a game look more detailed. However, rendering more complex scenes can increase the workload placed on the phone's processor and graphics hardware.

### Frame rate

Frame rate measures how many frames the game displays each second. It is expressed in frames per second, or FPS.

For example:

- 30 FPS means approximately 30 frames per second.
- 60 FPS means approximately 60 frames per second.
- 90 FPS means approximately 90 frames per second.
- 120 FPS means approximately 120 frames per second.

Higher frame rates can make movement and animation appear smoother, particularly in games that involve quick reactions.

However, selecting a higher FPS option does not guarantee that your phone will maintain it.

The hardware, game engine, software limits and conditions during gameplay all influence the result.

Android's technical quality guidance identifies 30 FPS as a reasonable minimum target for most games, while recommending 60 FPS or more for smoother experiences where the device and game support it.

Read [Android's technical quality guidance](https://developer.android.com/quality/technical).

## 2. Decide what matters most to your gameplay

Before changing anything, decide what you want from the game.

Different games and playing styles have different priorities.

### Competitive and fast-paced games

For competitive shooters, football games and other reaction-based experiences, responsive and consistent gameplay may matter more than the highest visual detail.

A stable frame rate can make movement easier to follow and controls feel more consistent.

Consider prioritising:

- A frame-rate target your phone can maintain.
- Moderate or balanced graphics.
- Reduced demanding visual effects when performance is unstable.
- Consistent performance during busy gameplay scenes.

A lower graphics preset is not automatically a disadvantage if it helps your device maintain smoother gameplay.

### Story-driven and visually focused games

For games where exploration, scenery and visual presentation are important, higher graphics quality may be worth considering.

You can prioritise visual detail when the game remains sufficiently smooth.

However, there is little benefit in selecting extremely demanding graphics settings if they introduce frequent stuttering or make the game uncomfortable to play.

### Long gaming sessions

If you regularly play for extended periods, consider the effect of your settings on battery consumption and device temperature.

Higher frame rates and more demanding graphics can increase the device's workload.

Android Developers explains that higher frame rates involve trade-offs in battery life, device temperature and graphical fidelity.

See [Android's guidance on game performance and technical quality](https://developer.android.com/quality/technical).

## 3. Start with a sensible baseline

Do not begin by enabling every available option.

Start with a configuration that gives you a reliable point of comparison.

### Step 1: Use the game's recommended or balanced preset

If the game provides options such as Low, Medium, High, Ultra or Balanced, begin with the recommended or balanced setting.

The names and actual effects of these presets vary between games.

A preset may change several graphics options simultaneously, so it is useful as a starting point rather than a final answer.

### Step 2: Choose a realistic FPS target

Look at the frame-rate options supported by the game.

If you have never tuned the game on your current device, begin with a moderate target such as 30 or 60 FPS, depending on the available options and the game's requirements.

You can test a higher target later.

Do not select 90 or 120 FPS simply because those options appear in the menu. Your phone must be able to render frames consistently enough to make the higher target worthwhile.

### Step 3: Keep other conditions reasonably consistent

Before comparing settings:

- Use the same game mode or gameplay area.
- Avoid testing while the phone is already unusually hot.
- Pause unnecessary downloads or heavy background activity.
- Keep other major settings unchanged.
- Use the same display and power configuration during comparisons.

This helps you identify whether a particular setting actually improves the experience.

## 4. Which graphics settings should you adjust first?

Not every graphics option affects performance in the same way.

The impact depends on the game engine, graphics implementation and device hardware.

The following settings are useful candidates to investigate when a game is not running smoothly.

### Rendering resolution

Resolution controls how much image detail the game attempts to render.

Some games provide a rendering scale or resolution option.

Reducing the rendering resolution can reduce the graphics workload, especially when the GPU is struggling to render complex scenes.

The trade-off is that the image may look less sharp.

If your game offers a resolution-scale setting, test one lower level before changing several other options.

### Shadows and lighting

Detailed shadows, dynamic lighting and reflections can add visual depth.

They can also increase rendering workload in some games.

If you experience frame drops during visually complex scenes, try lowering shadow quality or disabling particularly demanding lighting effects where the game allows it.

The actual improvement will depend on how the game implements those effects.

### Anti-aliasing

Anti-aliasing reduces the appearance of jagged edges around objects and surfaces.

It can improve image presentation, but some implementations require additional graphics processing.

When performance is inconsistent, test a lower anti-aliasing level or disable it temporarily.

Compare the visual difference before deciding whether the setting is worth keeping.

### Texture quality

Textures provide the visual detail applied to surfaces, characters and objects.

Higher texture quality can increase memory requirements.

If your device struggles with memory-heavy scenes or resource loading, lowering texture quality may be worth testing.

However, changing textures does not guarantee a higher frame rate. The result depends on the game and the device's available memory resources.

### Effects and environmental detail

Depending on the game, additional settings may control:

- Particle effects.
- Weather effects.
- Reflections.
- Foliage density.
- Crowd detail.
- Draw distance.
- Object visibility.

Some effects increase GPU workload. Others may introduce additional CPU or memory demands.

Do not assume every option labelled High has the same performance cost. Test the options individually.

## 5. How to find the best FPS setting

The highest available FPS option is not necessarily the best one for your phone.

Android's performance documentation explains that slow game sessions can result from CPU or GPU limitations, device overheating and differences between a game's frame rate and the display's refresh rate.

See [Android's slow-session documentation](https://developer.android.com/topic/performance/issues/slow-session).

Use the following approach.

### Start with a frame rate your device can handle

Suppose a game offers 30, 60 and 90 FPS.

If your device struggles to maintain 90 FPS, selecting that option may produce an inconsistent experience.

A stable 60 FPS target may be preferable.

If 60 FPS is also unstable, test 30 FPS and investigate whether the improvement is meaningful.

These are examples, not universal device recommendations.

### Check performance during demanding scenes

A game may run smoothly in its menu but struggle during an actual match.

Test the settings during normal gameplay, especially in scenes with many players, visual effects, objects or rapid movement.

Do not judge performance using the lobby or settings screen alone.

### Pay attention to consistency

Look beyond the number displayed in the settings menu.

Consider:

- Does camera movement remain smooth?
- Do animations become uneven during busy scenes?
- Do controls feel consistent?
- Does performance deteriorate after playing for some time?
- Does the phone become noticeably hotter?

A configuration that performs well only briefly may not be suitable for longer sessions.

## 6. Remember that display refresh rate is different from FPS

A phone's display refresh rate and a game's frame rate are not the same measurement.

A 120Hz display can refresh up to 120 times per second, but that does not mean every game on the phone renders 120 FPS.

The game may have a lower frame-rate limit, or the device may not have enough performance headroom to sustain a higher target.

Android Developers also explains that a higher display refresh rate can consume more power without providing a corresponding benefit when the game's target frame rate is lower.

Read [Android's guidance on display refresh rates and power efficiency](https://developer.android.com/games/optimize/power).

Do not confuse a phone advertising a 120Hz display with a game actually running at 120 FPS.

## 7. Use a controlled testing process

Changing several graphics settings at once makes it difficult to understand what improved performance.

Use a simple testing process instead.

**Step 1: Record your starting settings.**

Take note of the current graphics preset, FPS target, resolution and other important options.

**Step 2: Test the original configuration.**

Play the same game mode or repeatable gameplay scenario.

Pay attention to smoothness, stuttering, temperature and battery use.

**Step 3: Change one setting.**

For example, reduce shadow quality while leaving the other settings unchanged.

**Step 4: Repeat the same scenario.**

Compare the experience with your original configuration.

**Step 5: Keep or reverse the change.**

If the result is better, keep it temporarily. If it is worse or makes no meaningful difference, restore the previous setting.

**Step 6: Move to the next setting.**

Repeat the process with another option.

**Step 7: Test a longer session.**

A configuration that performs well in a short test may behave differently after the phone has been under load for longer.

Compare early-session performance with performance later in the session.

This is a practical comparison method, not a laboratory benchmark. It helps you make more informed adjustments without claiming precise FPS measurements.

## 8. Common mistakes to avoid

### Selecting maximum graphics and maximum FPS together

Your phone may not have enough processing capacity to maintain both.

Start with a balanced configuration and increase individual settings only when performance remains stable.

### Assuming higher FPS always means a better experience

Higher frame rates can improve smoothness, but they can also increase power consumption and device temperature.

Choose a target that makes sense for your game and device.

### Changing every setting at once

You will not know which adjustment helped or made performance worse.

Change one variable at a time.

### Trusting the FPS option without testing gameplay

A menu option is a target or selectable limit, not proof of sustained performance.

Check the game during actual gameplay.

### Ignoring heat

If performance deteriorates as the phone becomes unusually warm, reducing graphics settings alone may not be enough.

Pause the game and allow the device to cool naturally.

### Using unofficial tools to force unsupported settings

Avoid random configuration files, modified game applications and third-party tools promising guaranteed FPS improvements.

Unsupported modifications can cause instability, compatibility issues or account-related problems.

## Final thoughts

Choosing Android game settings is about finding the right balance between visual quality, frame-rate consistency, temperature and battery consumption.

Start with a sensible preset, choose a realistic FPS target and test the game under repeatable conditions.

Reduce demanding graphics options when necessary, and increase visual quality only when the device can handle the additional workload.

The highest available settings are not automatically the best settings.

A configuration that remains smooth and comfortable throughout your gaming session is usually more useful than one that looks impressive for only a few minutes.