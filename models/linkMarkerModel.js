import { schemaBuilder } from "./index"

const LinkMarker = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Link Marker is required"],
      unique: [true, "Link Marker is already exists"]
    }
  },
  "LinkMarker"
)

export default LinkMarker
