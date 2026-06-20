"use client";

import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  Flex,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { projects } from "@/app/data/portfolio";
import { useReveal } from "@/app/components/useReveal";

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: string;
}) {
  const [ref, vis] = useReveal();
  return (
    <Box
      ref={ref}
      as={NextLink}
      href={project.href}
      target="_blank"
      display="block"
      textDecoration="none"
      bg="brand.bg1"
      border="1px solid"
      borderColor="brand.border"
      borderRadius="20px"
      overflow="hidden"
      opacity={vis ? 1 : 0}
      transform={vis ? "translateY(0)" : "translateY(28px)"}
      transition={`opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}, border-color 0.3s, box-shadow 0.3s`}
      _hover={{
        transform: "translateY(-5px)",
        borderColor: "rgba(124,106,247,0.4)",
        boxShadow: "0 24px 64px rgba(124,106,247,0.1)",
        textDecoration: "none",
      }}
      role="group"
    >
      {/* Thumb */}
      <Flex
        h="190px"
        align="center"
        justify="center"
        fontSize="48px"
        position="relative"
        style={{ background: project.bg }}
      >
        {project.emoji}
        <Box
          position="absolute"
          bottom={3}
          right={3}
          bg="rgba(0,0,0,0.6)"
          border="1px solid"
          borderColor="brand.border2"
          borderRadius="full"
          px={3}
          py="3px"
          fontFamily="mono"
          fontSize="10px"
          color="brand.text2"
        >
          {project.badge}
        </Box>
      </Flex>

      {/* Body */}
      <Box p={6}>
        <Wrap spacing={2} mb={3}>
          {project.tags.map((t) => (
            <WrapItem key={t}>
              <Box
                bg="brand.accentGlow"
                border="1px solid"
                borderColor="rgba(124,106,247,0.2)"
                color="brand.accent2"
                fontSize="10px"
                fontWeight={500}
                px="9px"
                py="3px"
                borderRadius="full"
                fontFamily="mono"
              >
                {t}
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        <Text
          fontFamily="'ClashDisplay', sans-serif"
          fontSize="21px"
          fontWeight={700}
          color="brand.text"
          mb={2}
          letterSpacing="-0.5px"
        >
          {project.title}
        </Text>

        <Text fontSize="13px" color="brand.text2" lineHeight={1.75} mb={5}>
          {project.desc}
        </Text>

        <Flex
          justify="space-between"
          align="center"
          pt={4}
          borderTop="1px solid"
          borderColor="brand.border"
        >
          <Text
            fontSize="13px"
            fontWeight={500}
            color="brand.accent"
            display="flex"
            alignItems="center"
            gap={1}
            transition="gap 0.2s"
            _groupHover={{ gap: "9px" }}
          >
            View project →
          </Text>
          <Text fontFamily="mono" fontSize="10px" color="brand.text3">
            {project.meta}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const [ref, vis] = useReveal();

  return (
    <Box
      as="section"
      id="projects"
      py="100px"
      px={{ base: "20px", md: "48px" }}
    >
      <Box maxW="1100px" mx="auto">
        <HStack
          spacing={2}
          mb={4}
          ref={ref}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease, transform 0.65s ease"
        >
          <Text fontFamily="mono" fontSize="11px" color="brand.text3">
            //
          </Text>
          <Text
            fontFamily="mono"
            fontSize="11px"
            fontWeight={500}
            color="brand.accent"
            letterSpacing="2px"
            textTransform="uppercase"
          >
            Selected work
          </Text>
        </HStack>

        <Text
          fontFamily="'ClashDisplay', sans-serif"
          fontSize={{ base: "30px", md: "42px" }}
          fontWeight={700}
          color="brand.text"
          letterSpacing="-1.5px"
          lineHeight={1.1}
          mb={4}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s"
        >
          Projects I&apos;m proud of
        </Text>

        <Text
          fontSize="17px"
          color="brand.text2"
          maxW="520px"
          lineHeight={1.75}
          mb={14}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s"
        >
          A few highlights from 10+ shipped projects across government tech,
          SaaS, and product platforms.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={`${i * 0.08}s`} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
