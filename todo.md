### Bugs
- tapping the screen (outside the settings-area) does not make the menu re-appear. Only on mobile

### Enhancements
- Menu vignette should fade from dark to light theme
- Add loading/splash screen (with build date and github revision number)
- Implement the 'sharing' button
- Create page icon
- setup code coverage on circleci
- MOve settings to bottom (at least on mobile)
- Rotate the canvas 90 on mobile (when screen is vertical)
- Need a nicer font on settings
- animation effect on hovering over the labels (won't work on mobile, so may not be worth it)
- show combined palette

### Cleanup
- Create shared style class for 'center text vertically in div'

#### Done
- rename 'GhostSlider' to 'BarSlider' or something. There is nothing Ghost about it now that the 
opacity code is on the outside
- Need a vertical line on the slider (otherwise user can't know when the value is on either of the extremes)
- Need a visual indicator for the settings so users know where to click/how to interact
- Fade in/out settings based on mousemove/click (like menus on netflix/youtube/hbo)
- something slows down the rendering after many interactions. Must be some garbage hanging around after every 
event 
- Either fix the fullscreen button on mobile or hide it
- Show the full palette over or below the colors
- Remove the PaletteEditor (after we take the full-palette viz code)
- remove label support from ghostslider
- Rename Settings2 component
- Clicking on CurveEditor (without dragging) should not modify
- Each setting need padding left and right
- when slider hits edge we need to reset the start of the drag. E.g. if you drag all the way to the left, dragging to the right again makes it seem like nothing happens
- curve editor needs bigger margins (left and right) for mobile
- curve editor needs bigger margins (left and right) for mobile
- vignette does not work on safari
- Ghost sliders no longer animates on Safari
- move opacity animation of ghostslider to parent
- Page title





