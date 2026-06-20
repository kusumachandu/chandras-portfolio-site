"use client";

import { Box, Flex, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { meta } from "@/app/data/portfolio";

const pulseAnim = keyframes`
  0%,100% { opacity:1; transform:scale(1); }
  50%      { opacity:0.4; transform:scale(0.8); }
`;
const blinkAnim = keyframes`
  0%,100% { opacity:1; }
  50%      { opacity:0; }
`;

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const state = useRef({ wi: 0, ci: 0, del: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const { wi, ci, del } = state.current;
      const word = words[wi];
      if (!del) {
        const next = ci + 1;
        setText(word.slice(0, next));
        if (next === word.length) {
          state.current = { wi, ci: next, del: true };
          timer = setTimeout(tick, 2200);
        } else {
          state.current = { wi, ci: next, del: false };
          timer = setTimeout(tick, 75);
        }
      } else {
        const next = ci - 1;
        setText(word.slice(0, next));
        if (next === 0) {
          state.current = { wi: (wi + 1) % words.length, ci: 0, del: false };
          timer = setTimeout(tick, 75);
        } else {
          state.current = { wi, ci: next, del: true };
          timer = setTimeout(tick, 38);
        }
      }
    }
    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(meta.roles);

  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      px={{ base: "20px", md: "48px" }}
      position="relative"
      overflow="hidden"
    >
      {/* Glow orbs */}
      <Box position="absolute" w="600px" h="600px" borderRadius="50%"
        bg="brand.accent" opacity={0.06} filter="blur(120px)"
        top="-100px" right={0} pointerEvents="none" zIndex={0} />
      <Box position="absolute" w="400px" h="400px" borderRadius="50%"
        bg="brand.green" opacity={0.04} filter="blur(100px)"
        bottom={0} left="-100px" pointerEvents="none" zIndex={0} />

      <Flex
        maxW="1100px" mx="auto" w="full"
        direction={{ base: "column", lg: "row" }}
        align="center" gap={{ base: 12, lg: 16 }}
        pt="64px" zIndex={1}
      >
        {/* LEFT */}
        <VStack align="flex-start" flex={1} spacing={0}>
          {/* Available badge */}
          <Flex
            align="center" gap={2}
            bg="brand.greenBg"
            border="1px solid" borderColor="rgba(16,185,129,0.25)"
            borderRadius="full" px={4} py="6px"
            mb={8}
          >
            <Box
              w="6px" h="6px" borderRadius="full" bg="brand.green"
              sx={{ animation: `${pulseAnim} 2s ease-in-out infinite` }}
            />
            <Text fontSize="12px" fontWeight={500} color="brand.green" letterSpacing="0.3px">
              Available for new projects
            </Text>
          </Flex>

          {/* Name */}
          <Text
            fontFamily="'ClashDisplay', sans-serif"
            fontSize={{ base: "56px", md: "72px", lg: "80px" }}
            fontWeight={700} lineHeight={0.95}
            letterSpacing="-3px" color="brand.text"
            mb="4px"
          >
            Chandra
          </Text>
          <Text
            as="span"
            fontFamily="'ClashDisplay', sans-serif"
            fontSize={{ base: "56px", md: "72px", lg: "80px" }}
            fontWeight={700} lineHeight={0.95}
            letterSpacing="-3px"
            color="transparent"
            display="block"
            mb={7}
            sx={{ WebkitTextStroke: "1.5px rgba(124,106,247,0.5)" }}
          >
            Shekar.
          </Text>

          {/* Typewriter */}
          <HStack mb={7} minH="24px" spacing={0}>
            <Text fontFamily="mono" fontSize="15px" color="brand.accent2">
              {typed}
            </Text>
            <Box
              as="span"
              display="inline-block"
              w="2px" h="16px" bg="brand.accent" ml="2px"
              sx={{ animation: `${blinkAnim} 1s step-end infinite` }}
            />
          </HStack>

          {/* Desc */}
          <Text fontSize="17px" color="brand.text2" lineHeight={1.8} maxW="480px" mb={10}>
            {meta.tagline}
          </Text>

          {/* CTAs */}
          <HStack spacing={3} flexWrap="wrap">
            <Button
              as={NextLink} href="#projects"
              bg="brand.accent" color="white"
              size="lg" px={7} fontSize="14px" borderRadius="10px"
              _hover={{ bg: "brand.accent2", transform: "translateY(-2px)", boxShadow: "0 8px 32px rgba(124,106,247,0.25)" }}
              transition="all 0.25s"
            >
              View my work ↓
            </Button>
            <Button
              as={NextLink} href="#contact"
              bg="transparent" color="brand.text2"
              size="lg" px={7} fontSize="14px" borderRadius="10px"
              border="1px solid" borderColor="brand.border2"
              _hover={{ color: "brand.text", borderColor: "brand.accent" }}
              transition="all 0.2s"
            >
              Let&apos;s talk
            </Button>
          </HStack>

          {/* Stats */}
          <HStack
            spacing={10} mt={12} pt={11}
            borderTop="1px solid" borderColor="brand.border"
            w="full"
          >
            {meta.stats.map((s) => (
              <Box key={s.label}>
                <Text
                  fontFamily="'ClashDisplay', sans-serif"
                  fontSize="36px" fontWeight={700}
                  color="brand.text" letterSpacing="-1.5px" lineHeight={1}
                >
                  {s.num.replace("+", "")}
                  <Text as="span" color="brand.accent">+</Text>
                </Text>
                <Text fontSize="12px" color="brand.text3" mt={1} letterSpacing="0.3px">
                  {s.label}
                </Text>
              </Box>
            ))}
          </HStack>
        </VStack>

        {/* RIGHT — code card */}
        <Box
          display={{ base: "none", lg: "block" }}
          flexShrink={0} w="420px"
          position="relative"
        >
          <Box
            bg="brand.bg1"
            border="1px solid" borderColor="brand.border2"
            borderRadius="18px" p={7}
            boxShadow="0 32px 80px rgba(0,0,0,0.5)"
          >
            <HStack mb={6} spacing="6px">
              <Box w="10px" h="10px" borderRadius="full" bg="#FF5F57" />
              <Box w="10px" h="10px" borderRadius="full" bg="#FEBC2E" />
              <Box w="10px" h="10px" borderRadius="full" bg="#28C840" />
              <Text fontFamily="mono" fontSize="11px" color="brand.text3" ml={3}>chandra.ts</Text>
            </HStack>
            {[
              <><Text as="span" color="#C084FC">const</Text> <Text as="span" color="#60A5FA">developer</Text> <Text as="span" color="#94A3B8">= {"{"}</Text></>,
              <><Text as="span" color="#94A3B8">{"  "}</Text><Text as="span" color="#60A5FA">name</Text><Text as="span" color="#94A3B8">:</Text>      <Text as="span" color="#4ADE80">&quot;Chandra Shekar&quot;</Text><Text as="span" color="#94A3B8">,</Text></>,
              <><Text as="span" color="#94A3B8">{"  "}</Text><Text as="span" color="#60A5FA">role</Text><Text as="span" color="#94A3B8">:</Text>      <Text as="span" color="#4ADE80">&quot;Full Stack Dev&quot;</Text><Text as="span" color="#94A3B8">,</Text></>,
              <><Text as="span" color="#94A3B8">{"  "}</Text><Text as="span" color="#60A5FA">stack</Text><Text as="span" color="#94A3B8">: [</Text><Text as="span" color="#4ADE80">&quot;React&quot;</Text><Text as="span" color="#94A3B8">, </Text><Text as="span" color="#4ADE80">&quot;Node&quot;</Text><Text as="span" color="#94A3B8">, </Text><Text as="span" color="#4ADE80">&quot;Next.js&quot;</Text><Text as="span" color="#94A3B8">],</Text></>,
              <><Text as="span" color="#94A3B8">{"  "}</Text><Text as="span" color="#60A5FA">exp</Text><Text as="span" color="#94A3B8">:</Text>       <Text as="span" color="#FB923C">4</Text><Text as="span" color="#94A3B8">,</Text></>,
              <><Text as="span" color="#94A3B8">{"  "}</Text><Text as="span" color="#60A5FA">available</Text><Text as="span" color="#94A3B8">:</Text> <Text as="span" color="#C084FC">true</Text><Text as="span" color="#94A3B8">,</Text></>,
              <><Text as="span" color="#94A3B8">{"  "}</Text><Text as="span" color="#60A5FA">passion</Text><Text as="span" color="#94A3B8">:</Text>  <Text as="span" color="#4ADE80">&quot;great products&quot;</Text></>,
              <><Text as="span" color="#94A3B8">{"}"}</Text>;</>,
            ].map((line, i) => (
              <Text key={i} fontFamily="mono" fontSize="13px" lineHeight={2.1} whiteSpace="pre">
                {line}
              </Text>
            ))}
            <Text fontFamily="mono" fontSize="13px" lineHeight={2.1} mt={2}>
              <Text as="span" color="#374151">// Let&apos;s build something great</Text>
            </Text>
            <Text fontFamily="mono" fontSize="13px" lineHeight={2.1}>
              <Text as="span" color="#60A5FA">developer</Text>
              <Text as="span" color="#94A3B8">.</Text>
              <Text as="span" color="#60A5FA">hire</Text>
              <Text as="span" color="#94A3B8">();</Text>
              <Text as="span" color="#374151"> // ← start here</Text>
            </Text>
          </Box>

          {/* Floating chip */}
          <Flex
            position="absolute" bottom="-14px" right="-14px"
            bg="brand.bg2" border="1px solid" borderColor="brand.border2"
            borderRadius="12px" p={3} gap={3} align="center"
            boxShadow="0 8px 32px rgba(0,0,0,0.4)"
          >
            <Flex
              w="34px" h="34px" borderRadius="8px"
              bg="brand.accentGlow"
              align="center" justify="center" fontSize="16px" flexShrink={0}
            >
              ⚡
            </Flex>
            <Box>
              <Text fontSize="12px" fontWeight={500} color="brand.text">{meta.currentRole}</Text>
              <Text fontSize="11px" color="brand.text3" mt="1px">{meta.currentRoleSub}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
