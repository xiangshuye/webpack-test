import Vue from "vue";
import {
  dateFormatFromString,
  datetimeformatFromString
} from "@/utils/dateUtils";

Vue.filter("numbertoDate", function(value) {
  if (!value) {
    return "";
  }
  return dateFormatFromString(value);
});

Vue.filter("timestampToDatetime", function(timestamp) {
  if (!value) {
    return "";
  }
  return datetimeformatFromString(value);
});
