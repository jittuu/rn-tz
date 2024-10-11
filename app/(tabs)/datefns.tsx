import { SafeAreaView, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { TZDate } from "@date-fns/tz";
import { endOfDay, format } from "date-fns";

const formatFullDate = (date: TZDate) => {
  return format(date, "dd/MM/yyyy hh:mm:ss a xxx");
};

export default function DatefnsScreen() {
  const now = new Date();
  const bkk = new TZDate(now, "Asia/Bangkok");
  const ygn = new TZDate(now, "Asia/Yangon");

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">Welcome!</ThemedText>
      <ThemedText>{`Bkk (end of day): ${formatFullDate(
        endOfDay(bkk)
      )}`}</ThemedText>
      <ThemedText>{`Ygn (end of day): ${formatFullDate(
        endOfDay(ygn)
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
