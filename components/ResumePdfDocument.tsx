import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import type { ResumeData } from "@/content/resume";

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontSize: 10,
    color: "#0a0a0a",
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 18,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 4,
  },
  role: {
    fontSize: 12,
    color: "#404040",
    marginBottom: 8,
  },
  summary: {
    fontSize: 10,
    color: "#262626",
  },
  section: {
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },
  skillList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skill: {
    borderWidth: 1,
    borderColor: "#d4d4d4",
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 9,
  },
  entry: {
    marginBottom: 10,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 4,
  },
  entryTitle: {
    fontSize: 10,
    fontWeight: 700,
  },
  entrySubtitle: {
    fontSize: 9,
    color: "#525252",
  },
  bullet: {
    marginBottom: 2,
  },
  link: {
    color: "#0a0a0a",
    textDecoration: "none",
  },
});

type ResumePdfDocumentProps = {
  data: ResumeData;
};

export function ResumePdfDocument({ data }: ResumePdfDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.role}>
            {data.role} | {data.location}
          </Text>
          <Text style={styles.summary}>{data.summary}</Text>
          <Text style={styles.summary}>Availability: {data.availability}</Text>
          <Link src={data.contact.github} style={styles.link}>
            GitHub: {data.contact.github}
          </Link>
          {data.contact.email ? (
            <Text style={styles.summary}>Email: {data.contact.email}</Text>
          ) : null}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillList}>
            {data.skills.map((skill) => (
              <Text key={skill} style={styles.skill}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.experience.map((entry) => (
            <View key={entry.title} style={styles.entry}>
              <View style={styles.entryHeader}>
                <View>
                  <Text style={styles.entryTitle}>{entry.title}</Text>
                  <Text style={styles.entrySubtitle}>{entry.subtitle}</Text>
                </View>
                <Text>{entry.period}</Text>
              </View>
              {entry.bullets.map((bullet) => (
                <Text key={bullet} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selected Projects</Text>
          {data.projects.map((entry) => (
            <View key={entry.title} style={styles.entry}>
              <View style={styles.entryHeader}>
                <View>
                  <Text style={styles.entryTitle}>{entry.title}</Text>
                  <Text style={styles.entrySubtitle}>{entry.subtitle}</Text>
                </View>
                <Text>{entry.period}</Text>
              </View>
              {entry.bullets.map((bullet) => (
                <Text key={bullet} style={styles.bullet}>
                  • {bullet}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
