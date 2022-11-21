import { z, TypeOf } from "zod";

export const rideSchema = z.object({
  body: z.object({
    id: z
      .string({ required_error: "ID is required !" })
      .min(3, "ID must be more than 2 character"),

    name: z
      .string({ required_error: "name is required !" })
      .min(5, "Name must be more than 4 character"),
    type: z.enum(["rollercoaster", "thriller", "water"], {
      required_error: "Major is required !",
    }),

    tickets: z.number({ required_error: "Ticket is required !" }),

    pric: z.number({ required_error: "Price is required !" }),
  }),
});

export type RidesSchemaType = TypeOf<typeof rideSchema>["body"];
