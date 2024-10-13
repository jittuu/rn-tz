import { TZDate } from "@date-fns/tz";
import { endOfDay, format, startOfDay, subWeeks } from "date-fns/fp";
import { flow } from "lodash-es";
import { SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";

const formatFullDate = (date: Date) => {
  return format("dd/MM/yyyy HH:mm:ss xxx")(date);
};

export default function DatefnsScreen() {
  const now = new Date();
  const bkk = new TZDate(now, "Asia/Bangkok");
  const ygn = new TZDate(now, "Asia/Yangon");

  const startOfLastWeek = flow(subWeeks(1), startOfDay)(ygn);

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">Welcome!</ThemedText>
      <ThemedText>{`Bkk (end of day): ${formatFullDate(
        endOfDay(bkk)
      )}`}</ThemedText>
      <ThemedText>{`Ygn (end of day): ${formatFullDate(
        endOfDay(ygn)
      )}`}</ThemedText>
      <ThemedText>{`Ygn (start of last week): ${formatFullDate(
        startOfLastWeek
      )}`}</ThemedText>
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
