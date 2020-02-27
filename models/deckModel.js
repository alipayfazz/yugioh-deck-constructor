import { schemaBuilder, Schema, validateMinMaxArrayLength } from "./index"

const Deck = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Deck is required"]
    },
    main: {
      type: [
        {
          card: {
            type: Schema.Types.ObjectId,
            ref: "Card"
          },
          amount: {
            type: Number,
            default: 0
          }
        }
      ],
      validate: [
        validateMinMaxArrayLength({ maxLength: 60, minLength: 40 }),
        "Main Deck size must be between 40 - 60 cards"
      ]
    },
    side: {
      type: [
        {
          card: {
            type: Schema.Types.ObjectId,
            ref: "Card"
          },
          amount: {
            type: Number,
            default: 0
          }
        }
      ],
      validate: [
        validateMinMaxArrayLength({ maxLength: 15 }),
        "Side Deck size must be between 0 - 15 cards"
      ]
    },
    extra: {
      type: [
        {
          card: {
            type: Schema.Types.ObjectId,
            ref: "Card"
          },
          amount: {
            type: Number,
            default: 0
          }
        }
      ],
      validate: [
        validateMinMaxArrayLength({ maxLength: 15 }),
        "Extra Deck size must be between 0 - 15 cards"
      ]
    },
    player: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    archtype: {
      type: Schema.Types.ObjectId,
      ref: "Archtype"
    }
  },
  "Deck"
)

export default Deck
