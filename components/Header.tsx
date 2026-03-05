import { createHomeStyles } from "@/assets/images/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@react-navigation/native";
import { useQuery } from "convex/react";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors as any);
  const todos = useQuery(api.todos.getTodos);
  return (
    <View style={homeStyles.header}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
