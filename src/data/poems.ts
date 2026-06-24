export type Mood = "Longing" | "Devotion" | "Passion" | "Joy" | "Farewell" | "Reflection";

export interface Poem {
  id: string;
  title: string;
  poet: string;
  text: string;
  englishText?: string;
  moods: Mood[];
  year?: string;
}

// all poems here are currently just temporary.
// deal with me for now.
// all 9 will be in Bikol.

export const poems: Poem[] = [
  {
    id: "1",
    title: "Sonnet 18: Shall I compare thee to a summer's day?",
    poet: "William Shakespeare",
    moods: ["Devotion", "Joy"],
    year: "1609",
    text: `[Bikolano translation for Sonnet 18 goes here]`,
    englishText: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou owest;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest:
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee.`
  },
  {
    id: "2",
    title: "Tonight I Can Write The Saddest Lines",
    poet: "Pablo Neruda",
    moods: ["Farewell", "Longing", "Reflection"],
    year: "1924",
    text: `[Bikolano translation for Tonight I Can Write The Saddest Lines goes here]`,
    englishText: `Tonight I can write the saddest lines.

Write, for example, 'The night is shattered
and the blue stars shiver in the distance.'

The night wind revolves in the sky and sings.

Tonight I can write the saddest lines.
I loved her, and sometimes she loved me too.

Through nights like this one I held her in my arms.
I kissed her again and again under the endless sky.

She loved me, sometimes I loved her too.
How could one not have loved her great still eyes.

Tonight I can write the saddest lines.
To think that I do not have her. To feel that I have lost her.

To hear the immense night, still more immense without her.
And the verse falls to the soul like dew to the pasture.

What does it matter that my love could not keep her.
The night is shattered and she is not with me.`
  },
  {
    id: "3",
    title: "How Do I Love Thee? (Sonnet 43)",
    poet: "Elizabeth Barrett Browning",
    moods: ["Devotion", "Passion"],
    year: "1850",
    text: `[Bikolano translation for Sonnet 43 goes here]`,
    englishText: `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.
I love thee to the level of every day's
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right;
I love thee purely, as they turn from praise.
I love thee with the passion put to use
In my old griefs, and with my childhood's faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`
  },
  {
    id: "4",
    title: "She Walks in Beauty",
    poet: "Lord Byron",
    moods: ["Devotion", "Reflection"],
    year: "1815",
    text: `[Bikolano translation for She Walks in Beauty goes here]`,
    englishText: `She walks in beauty, like the night
Of cloudless climes and starry skies;
And all that's best of dark and bright
Meet in her aspect and her eyes;
Thus mellowed to that tender light
Which heaven to gaudy day denies.

One shade the more, one ray the less,
Had half impaired the nameless grace
Which waves in every raven tress,
Or softly lightens o'er her face;
Where thoughts serenely sweet express,
How pure, how dear their dwelling-place.

And on that cheek, and o'er that brow,
So soft, so calm, yet eloquent,
The smiles that win, the tints that glow,
But tell of days in goodness spent,
A mind at peace with all below,
A heart whose love is innocent!`
  },
  {
    id: "5",
    title: "Bright Star",
    poet: "John Keats",
    moods: ["Longing", "Devotion"],
    year: "1819",
    text: `[Bikolano translation for Bright Star goes here]`,
    englishText: `Bright star, would I were stedfast as thou art—
Not in lone splendour hung aloft the night
And watching, with eternal lids apart,
Like nature's patient, sleepless Eremite,
The moving waters at their priestlike task
Of pure ablution round earth's human shores,
Or gazing on the new soft-fallen mask
Of snow upon the mountains and the moors—
No—yet still stedfast, still unchangeable,
Pillow'd upon my fair love's ripening breast,
To feel for ever its soft fall and swell,
Awake for ever in a sweet unrest,
Still, still to hear her tender-taken breath,
And so live ever—or else swoon to death.`
  },
  {
    id: "6",
    title: "He Wishes for the Cloths of Heaven",
    poet: "W. B. Yeats",
    moods: ["Devotion", "Longing"],
    year: "1899",
    text: `[Bikolano translation for He Wishes for the Cloths of Heaven goes here]`,
    englishText: `Had I the heavens' embroidered cloths,
Enwrought with golden and silver light,
The blue and the dim and the dark cloths
Of night and light and the half light,
I would spread the cloths under your feet:
But I, being poor, have only my dreams;
I have spread my dreams under your feet;
Tread softly because you tread on my dreams.`
  },
  {
    id: "7",
    title: "Love's Philosophy",
    poet: "Percy Bysshe Shelley",
    moods: ["Passion", "Longing"],
    year: "1819",
    text: `[Bikolano translation for Love's Philosophy goes here]`,
    englishText: `The fountains mingle with the river
   And the rivers with the ocean,
The winds of heaven mix for ever
   With a sweet emotion;
Nothing in the world is single;
   All things by a law divine
In one spirit meet and mingle.
   Why not I with thine?—

See the mountains kiss high heaven
   And the waves clasp one another;
No sister-flower would be forgiven
   If it disdained its brother;
And the sunlight clasps the earth
   And the moonbeams kiss the sea:
What is all this sweet work worth
   If thou kiss not me?`
  },
  {
    id: "8",
    title: "A Glimpse",
    poet: "Walt Whitman",
    moods: ["Joy", "Reflection"],
    year: "1860",
    text: `[Bikolano translation for A Glimpse goes here]`,
    englishText: `A glimpse through an interstice caught,
Of a crowd of workmen and drivers in a bar-room around the stove late of a winter night, and I unremark'd seated in a corner,
Of a youth who loves me and whom I love, silently approaching and seating himself near, that he may hold me by the hand,
A long while amid the noises of coming and going, of drinking and oath and smutty jest,
There we two, content, happy in being together, speaking little, perhaps not a word.`
  }
];
