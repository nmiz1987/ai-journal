import { useStreaks } from "@/hooks/use-streaks";
import { formatUppercaseDate, getTimeOfDayGreeting } from "@/lib/utils/date";
import { getUserFirstName } from "@/lib/utils/user";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "tamagui";

export default function HomeScreen() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { currentStreak, longestStreak, isActive, statusMessage, daysUntilNextMilestone, nextMilestone, isLoading: streaksLoading } = useStreaks();

  // Format current date and get greeting using utilities
  const now = new Date();
  const formattedDate = formatUppercaseDate(now);
  const greeting = getTimeOfDayGreeting();
  const userName = getUserFirstName(user);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
