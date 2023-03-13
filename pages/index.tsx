import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/layouts";

interface Props {
  pokemon: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <>
      <Layout title="Pokes">
        <h1>NextPage</h1>
        <Button>Click</Button>
        <ul>
          {pokemon.map(({ id, name }: SmallPokemon) => (
            <li key={id}>
              #{id} - {name}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

import { GetStaticProps } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";

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
  console.log(data);
  return {
    props: { pokemon },
  };
};

export default HomePage;
