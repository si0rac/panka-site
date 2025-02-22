import type { TinaField } from "tinacms";
export function blogpostsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Egy rövid összefoglaló a posztról",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "datetime",
      name: "Date",
      label: "A megjelenés időpontja",
    },
    {
      type: "image",
      name: "image",
      label: "Thumbnail image for the post",
    },
    {
      type: "boolean",
      name: "comments",
      label: "Lehet-e kommentelni?",
    },
    {
      type: "string",
      name: "tag",
      label: "A cikkhez tartozó kulcsszavak (tagek)",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "permalink",
      label: "permalink",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
export function eventsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Egy rövid leírás az eseményről",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "datetime",
      name: "event_date",
      label: "Mikor lesz az esemény?",
    },
    {
      type: "string",
      name: "event_type",
      label: "Az esemény típusa",
      options: ["Zárt csoport", "Nyitott csoport", "Workshop"],
    },
    {
      type: "image",
      name: "image",
      label: "Indexkép eseményekhez",
    },
    {
      type: "string",
      name: "tags",
      label: "A cikkhez tartozó kulcsszavak (tagek)",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "comments",
      label: "Lehet-e kommentelni?",
    },
  ] as TinaField[];
}
