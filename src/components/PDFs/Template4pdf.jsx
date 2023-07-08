import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    color: "#9845bf",
  },
  profileImage: {
    marginRight: 20,
    width: 100,
    height: 100,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    gap: 10,
  },
  imageContainer:{
    height: 100,
    width:100,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: "50%",

  },
  profileDetails: {
    flex: 2,
  },
  section: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  skills: {
    marginBottom: 10,
  },
  line: {
    borderBottom: "1px solid black",
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    fontWeight: "bold",
    color: "#9845bf",
    margin: "15px 0",
  },
});

const Template4pdf = ({ resume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>Resume</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <View style={styles.imageContainer}>
          <Image src={resume.personalDetails.image} style={styles.image} />
          </View>
          <Text style={{ fontWeight: "600", marginTop: 10 }}>
            {resume.personalDetails.firstName} {resume.personalDetails.lastName}
          </Text>
        </View>
        <View style={styles.profileDetails}>
          <Text style={{ marginBottom: "10px" }}>
            {" "}
            {resume.personalDetails.email}, {resume.personalDetails.mobile}
          </Text>
          <Text style={{ marginBottom: "10px" }}>
            {resume.personalDetails.address}
          </Text>
          <Text style={{ marginBottom: "10px" }}>
            {resume.personalDetails.pincode}, {resume.personalDetails.state}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.section}>
        <Text style={styles.heading}>Objectives</Text>
        <Text>{resume.personalDetails.objectives}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>{resume.educationDetails.type}</Text>
        <Text style={{ marginBottom: "10px" }}>
          {resume.educationDetails.degree}, {resume.educationDetails.university}{" "}
          ({resume.educationDetails.startYear} -{" "}
          {resume.educationDetails.endYear})
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>

        {resume.workDetails.map((work, index) => (
          <Text style={{ marginBottom: "10px" }} key={index}>
            {work.jobTitle} at {work.orgName} ({work.startYear} - {work.endYear})
          </Text>
        ))}
      </View>
      <View style={styles.line} />
      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <View style={styles.skills}>
          {resume.skillDetails.map((skills, index) => (
            <Text key={index} style={{ marginBottom: "10px" }}>- {skills.skill}</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Template4pdf;
