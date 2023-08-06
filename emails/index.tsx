import { Head } from "@react-email/head";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Font } from "@react-email/font";
import { Hr } from "@react-email/hr";
import { Column } from "@react-email/column";
import { Row } from "@react-email/row";
import { Link } from "@react-email/link";
import { Img } from "@react-email/img";
import * as React from "react";

export default function Email(props:{title:string,content: string}) {
    return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <title>My email title</title>
      </Head>
      <Tailwind>
        <Section className="bg-white p-6">
          <Section
            className="mx-auto max-w-2xl w-full px-6 "
            style={{ border: "solid 1px #dedede", borderRadius: "5px" }}
          >
            <Row style={{ display: "flex" }}>
              <Column>
                <Img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Lego_logo.png" width="25" height="25" alt="logo" />
              </Column>
              <Column>
                <Text className="text-2xl font-bold">Logo</Text>
              </Column>
            </Row>
            <Text className="text-4xl font-extrabold">{props.title}</Text>
            <Text>
             {props.content}
            </Text>
            <Hr />
            <Section className="h-4" />
            <Section className="text-center">
              <Link href="" target="_blank">
                Website
              </Link>
              {" • "}
              <Link href="" target="_blank">
                Support
              </Link>
            </Section>
            <Row>
              <Column className="w-full" align="center">
                <Text className="text-gray-500">
                  @ 2023 Logo, All Rights Reserved
                </Text>
              </Column>
            </Row>
          </Section>
        </Section>
      </Tailwind>
    </Html>
  );
}
