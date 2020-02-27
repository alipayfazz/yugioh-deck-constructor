import { schemaBuilder, Schema } from "./index"

const User = schemaBuilder(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username is already taken"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already registered"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [4, "Minimum required characters for password is 4"]
    },
    avatarURL: String,
    decks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Deck"
      }
    ],
    favCards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Card"
      }
    ],
    favDecks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Deck"
      }
    ],
    watchList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Card"
      }
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  "User"
)

export default User
