Document various ways of displaying statuses (together)

## Pill
import { Pill } from '@instructure/ui-pill'

Displays short, contextual information about an item. Change the border and text color via the color prop. Use the margin prop to add space around the component. Use the renderIcon prop to add an icon to the left of the text. Additionally, you can use the statusLabel prop to add a label to the left of the main text.

Guidelines
Don't
Use more than 2 words for the main text
Use more than 2 words for the statusLabel
Use for dismissible items (use a Tag instead)
Use for counts (use a Badge instead)
Put actions next to the text


## Tag
import { Tag } from '@instructure/ui-tag'

Use <Tag /> to represent a category or group in a form.

Dismissible
When the dismissible prop is added to a clickable Tag, the button renders an X/close icon (the Tag should be dismissed via the onClick prop). When implementing dismissable tags, be sure to add AccessibleContent to clarify that the tag is dismissible to screen readers.

Inline variant
This variant is designed to look similar to the surrounding text.


## Badge
import { Badge } from '@instructure/ui-badge'

Do
Use count for up to 2 digits of numbers
Use "+" symbol for more than 2 digits (99+)
Use for numeric count (like unread messages)
Provide accessible text for what the number represents

Don't
Use as a status indicator refer to Pill
Use for text strings

Standalone, notification and color variants
Setting the standalone prop to true renders Badge as a standalone element that is not positioned relative to a child and displays inline-block. Setting type="notification" will render small circles that should not contain any visible text.

Placement
Default is top end. Note that standalone badges can't be placed.

Limit the count
Use the countUntil prop to set a limit for the count. The default for formatOverflowText is a "+" symbol.

Making badges accessible
Badge counts are automatically fed to screenreaders through the aria-describedby attribute. Often a stand alone number doesn't give a screenreader user enough context ("3" vs. "You have 3 unread emails"). The examples below use the formatOutput prop to make the badge more screenreader-friendly.

