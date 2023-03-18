import { Container, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Text color="white" h3>
          Pokemon
        </Text>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Text css={{ marginRight: "5px" }} color="white">
          Favorites
        </Text>
      </NextLink>
    </div>
  );
};
