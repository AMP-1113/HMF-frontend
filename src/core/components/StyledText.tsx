import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function MonoTextBold(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono', fontWeight: "700" }]} />;
}