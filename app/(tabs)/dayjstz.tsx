/*
 READ ME FIRST!
 =======
 Dayjs with Timezone is NOT WORKING in React Native.
 I've tried to use polyfill such as @formatjs, intl and date-time-format-timezone but it's not working.

 SOLUTION:
    - Use Date-fns with Timezone instead.
*/

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Yangon");

const formatFullDate = (date: dayjs.Dayjs) => {
  return date.format("DD/MM/YYYY hh:mm:ss A Z");
};

export default function DayjsScreen() {
  const now = dayjs().tz("Asia/Yangon");
  const today = now.endOf("day");

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">Welcome!</ThemedText>
      <ThemedText>{`Now (in YGN): ${formatFullDate(now)}`}</ThemedText>
      <ThemedText>{`Today (in YGN): ${formatFullDate(today)}`}</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
