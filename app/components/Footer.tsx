"use client";

import { Box, Flex, Text, Link, HStack } from "@chakra-ui/react";
import { meta } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <Box borderTop="1px solid" borderColor="brand.border">
      <Flex
        maxW="1100px" mx="auto"
        px={{ base: "20px", md: "48px" }}
        py={7}
        align="center" justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={3}
      >
        <Text fontFamily="mono" fontSize="12px" color="brand.text3">
          © 2024 Chandra Shekar. Built with ♥
        </Text>
        <HStack spacing={6}>
          {[
            { label: "GitHub",   href: meta.github   },
            { label: "LinkedIn", href: meta.linkedin  },
            { label: "Email",    href: `mailto:${meta.email}` },
          ].map((l) => (
            <Link
              key={l.label} href={l.href}
              isExternal={l.href.startsWith("http")}
              fontSize="13px" color="brand.text3"
              _hover={{ color: "brand.accent2", textDecoration: "none" }}
              transition="color 0.2s"
            >
              {l.label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
