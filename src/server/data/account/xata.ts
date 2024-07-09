// Generated by Xata Codegen 0.29.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "user_preferences_ui",
    columns: [
      {
        name: "dark_mode",
        type: "bool",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
  {
    name: "users",
    columns: [
      {
        name: "email",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
      },
      {
        name: "name_first",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "name_last",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "phone_number",
        type: "int",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "preferences_ui",
        type: "link",
        link: { table: "user_preferences_ui" },
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "provider",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
      },
      {
        name: "xata_createdat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: "('rec_'::text || (xata_private.xid())::text)",
      },
      {
        name: "xata_updatedat",
        type: "datetime",
        notNull: true,
        unique: false,
        defaultValue: "now()",
      },
      {
        name: "xata_version",
        type: "int",
        notNull: true,
        unique: false,
        defaultValue: "0",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type UserPreferencesUi = InferredTypes["user_preferences_ui"];
export type UserPreferencesUiRecord = UserPreferencesUi & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  user_preferences_ui: UserPreferencesUiRecord;
  users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Paul-Shorey-s-workspace-6s4u10.us-east-1.xata.sh/db/auth",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
