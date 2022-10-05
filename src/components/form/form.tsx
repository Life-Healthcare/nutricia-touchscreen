import React, { ChangeEventHandler } from "react";
import {
  Content,
  FormWrapper,
  Group,
  Header,
  Section,
} from "@/components/form/styles";
import { Checkbox, Error } from "@/components/form/components/input";

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
        </Section>
      </Content>
    </FormWrapper>
  );
}
