"use client";

import {
  Box, Flex, HStack, Link, Text, Button,
  useDisclosure, IconButton, VStack, Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      position="fixed"
      top={0} left={0} right={0}
      zIndex={100}
      bg="rgba(8,12,20,0.85)"
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor="brand.border"
    >
      <Flex
        maxW="1100px" mx="auto"
        px={{ base: "20px", md: "48px" }}
        h="64px"
        align="center" justify="space-between"
      >
        {/* Logo */}
        <Link
          as={NextLink} href="#hero"
          fontFamily="'ClashDisplay', sans-serif"
          fontWeight={700} fontSize="20px"
          color="brand.text"
          letterSpacing="-0.5px"
          _hover={{ textDecoration: "none" }}
        >
          CS<Text as="span" color="brand.accent">.</Text>
        </Link>

        {/* Desktop links */}
        <HStack spacing={9} display={{ base: "none", md: "flex" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              as={NextLink} href={l.href}
              fontSize="13px" fontWeight={500}
              color="brand.text2" letterSpacing="0.2px"
              _hover={{ color: "brand.text", textDecoration: "none" }}
              transition="color 0.2s"
            >
              {l.label}
            </Link>
          ))}
        </HStack>

        {/* CTA */}
        <Button
          as={NextLink} href="#contact"
          display={{ base: "none", md: "flex" }}
          variant="accent" size="sm"
          px={5} fontSize="13px"
        >
          Hire me
        </Button>

        {/* Mobile hamburger */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Toggle menu"
          icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />}
          variant="ghost"
          color="brand.text2"
          onClick={onToggle}
          _hover={{ bg: "transparent", color: "brand.text" }}
        />
      </Flex>

      {/* Mobile menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          px={5} pb={6} spacing={4}
          borderTop="1px solid"
          borderColor="brand.border"
          bg="brand.bg1"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              as={NextLink} href={l.href}
              fontSize="14px" fontWeight={500}
              color="brand.text2" w="full"
              py={2}
              onClick={onToggle}
              _hover={{ color: "brand.text", textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
          <Button as={NextLink} href="#contact" variant="accent" w="full" onClick={onToggle}>
            Hire me
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
}
