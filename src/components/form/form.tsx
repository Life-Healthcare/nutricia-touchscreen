import React, { ChangeEventHandler } from "react";
import {
  Content,
  FormWrapper,
  Group,
  Header,
  Section,
} from "@/components/form/styles";
import { Checkbox, Error, TextInput } from "@/components/form/components/input";

type User = {
  nutrison: {
    [key: string]: boolean;
  };
  firstName: string;
  lastName: string;
  emailAddress: string;
  placeOfWork: string;
  agreement: boolean;
};

const DEFAULT_USER = {
  nutrison: {
    "protein-shot-leave-piece": false,
  },
  firstName: "",
  lastName: "",
  emailAddress: "",
  placeOfWork: "",
  agreement: false,
};

export default function Form() {
  const [user, setUser] = React.useState<User>(DEFAULT_USER);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <FormWrapper>
      <Header>
        <h1>
          <span>ORDER YOUR NUTRISON SUPPORT MATERIALS</span> AND MAKE SURE
          EVERYTHING IS AT YOUR FINGERTIPS
        </h1>
        <img src="./assets/images/logo.png" alt="Logo" />
      </Header>
      <Content>
        <Section>
          <Group>
            <h2>
              Please choose the Nutrison support materials you are interested
              in:*
            </h2>
            <Checkbox
              label="Nutrison Protein Shot Leave Piece"
              checked={user.nutrison["protein-shot-leave-piece"]}
              name={"protein-shot-leave-piece"}
              onChange={onChange}
            />
            <Checkbox
              label="Nutrison Protein Shot Leave Piece"
              checked={user.nutrison["protein-shot-leave-piece"]}
              name={"protein-shot-leave-piece"}
              onChange={onChange}
            />
            <Checkbox
              label="Nutrison Protein Shot Leave Piece"
              checked={user.nutrison["protein-shot-leave-piece"]}
              name={"protein-shot-leave-piece"}
              onChange={onChange}
            />
            <Checkbox
              label="Nutrison Protein Shot Leave Piece"
              checked={user.nutrison["protein-shot-leave-piece"]}
              name={"protein-shot-leave-piece"}
              onChange={onChange}
            />
            <Checkbox
              label="Nutrison Protein Shot Leave Piece"
              checked={user.nutrison["protein-shot-leave-piece"]}
              name={"protein-shot-leave-piece"}
              onChange={onChange}
            />
            <Error>*Please select at least one option</Error>
          </Group>
          <Group>
            <TextInput
              name="firstName"
              placeholder="Your first name"
              label="Please enter your first name*"
              value={user.firstName}
              onChange={onChange}
            />
            <TextInput
              name="lastName"
              placeholder="Your last name"
              label="Please enter your last name*"
              value={user.lastName}
              onChange={onChange}
            />
          </Group>
        </Section>
        <Section>
          <Group>
            <TextInput
              name="emailAddress"
              placeholder="Email address"
              label="Please enter your email address*"
              value={user.emailAddress}
              onChange={onChange}
            />
            <TextInput
              name="firstName"
              placeholder="Place of work"
              label="Please enter your place of work*"
              value={user.placeOfWork}
              onChange={onChange}
            />
          </Group>
          <Group>
            <h2>Be the first to know:</h2>
            <Checkbox
              label={`Yes, I would like Nutricia to contact me to update me on 
              upcoming educational webinars and events, the latest scientific 
              research and news about Nutricia products & services as well as 
              opportunities to provide feedback. You can withdraw your consent 
              at any time. Please see Nutricia’s Privacy Notice for Healthcare 
              Professionals available at www.nutricia.co.uk/hcp/privacy-policy 
              for more information.`}
              checked={user.nutrison["protein-shot-leave-piece"]}
              name={"protein-shot-leave-piece"}
              onChange={onChange}
              labelSize="sm"
            />
          </Group>
          <Group>

          </Group>
        </Section>
      </Content>
    </FormWrapper>
  );
}
