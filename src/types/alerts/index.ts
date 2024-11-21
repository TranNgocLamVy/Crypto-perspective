// Enums for alerts
export const CONDITION = {
  GREATER_THAN: ">",
  LESS_THAN: "<",
  GREATER_THAN_OR_EQUAL: ">=",
  LESS_THAN_OR_EQUAL: "<=",
  EQUAL: "==",
};
export type Condition = keyof typeof CONDITION;

export const NOTIFICATION_METHOD = {
  EMAIL: "email",
  TELEGRAM: "telegram",
};
export type Notification_method = keyof typeof NOTIFICATION_METHOD;

export const TRIGGER_TYPE = {
  SPOT: "spot",
  INDICATOR: "indicator",
};
export type Trigger_type = keyof typeof TRIGGER_TYPE;

// Indicator Types
export type GetIndicatorPayload = {
  symbol: string;
  indicators: string;
  days: number;
};

export type IndicatorData = {
  solana: {
    symbol: string;
    values: {
      MA: string;
      EMA: string;
    };
    eventTime: string;
  };
};

// Snooze Types
export type CreateSnoozePayload = {
  solana: {
    symbol: string;
    values: {
      MA: string;
      EMA: string;
    };
    eventTime: string;
  };
};
// export type GetSnoozePayload = {
//   snoozeType: string;
// };

// export type SnoozeData = {
//   symbol: string;
//   conditionType: string;
//   startTime: string;
//   endTime: string;
// };
export type DeleteSnoozePayload = {
  symbol: string;
  snoozeType: string;
};

// User Indicator Types
export type CreateUserIndicatorPayload = {
  name: string;
  code: string;
};

// trigger condition types
export type TriggerConditionData = {
  id: string;
  alert_id: string;
  username: string;
  symbol: string;
  condition: Condition;
  notification_method: Notification_method;
  spotPriceThreshold: number;
  triggerType: Trigger_type;
};

export type CreateTriggerConditionPayload = {
  symbol: string;
  condition: Condition;
  price: number;
  fundingRate: string;
  notification_method: Notification_method;
};

export type DeleteTriggerConditionPayload = {
  symbol: string;
  triggerType: Trigger_type;
};

// indicator trigger condition types
export type IndicatorTriggerConditionData = {
  id: string;
  alert_id: string;
  username: string;
  symbol: string;
  condition: Condition;
  notification_method: Notification_method;
  indicators: string;
  values: number;
};

export type CreateIndicatorTriggerConditionPayload = {
  symbol: string;
  condition: Condition;
  price: number;
  indicator: string;
  notification_method: Notification_method;
};

export type DeleteIndicatorTriggerConditionPayload = {
  symbol: string;
};
