import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemon: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <>
      <Layout title="Pokes">
        <h1>NextPage</h1>
        <Button>Click</Button>
        <Grid.Container gap={2} justify="flex-start">
          {pokemon.map((pokemon: SmallPokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemon: SmallPokemon[] = data?.results.map((x: any, index: number) => {
    return {
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
      ...x,
    };
  });
  return {
    props: { pokemon },
  };
};

export default HomePage;
