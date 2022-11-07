//package com.ssafy.memberservice.global.security.handler;
//
//import com.ssafy.memberservice.domain.chatting.pubsub.service.CrewChatService;
//import com.ssafy.memberservice.domain.chatting.pubsub.service.PloggingChatService;
//import com.ssafy.memberservice.global.security.util.JwtTokenProvider;
//import io.jsonwebtoken.*;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.HttpHeaders;
//import org.springframework.messaging.Message;
//import org.springframework.messaging.MessageChannel;
//import org.springframework.messaging.simp.stomp.StompCommand;
//import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
//import org.springframework.messaging.support.ChannelInterceptor;
//import org.springframework.security.access.AccessDeniedException;
//import org.springframework.stereotype.Component;
//import org.springframework.util.StringUtils;
//
//import java.security.Principal;
//import java.util.Optional;
//
//@Slf4j
//@Component
//@RequiredArgsConstructor
//public class StompHandler implements ChannelInterceptor {
//
//    @Value("${token.secret}")
//    private String secretKey;
//
//    private final JwtTokenProvider jwtTokenProvider;
//
//    private final CrewChatService crewChatService;
//
//    private final PloggingChatService ploggingChatService;
//
//    @Override
//    public Message<?> preSend(Message<?> message, MessageChannel channel) {
//
//        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
//
//        if (StompCommand.CONNECT == accessor.getCommand()) {
//            if (!jwtTokenProvider.validateToken(extractToken(accessor))) {
//                throw new AccessDeniedException("연결 거부");
//            }
//        } else if (StompCommand.SUBSCRIBE == accessor.getCommand()) { // 채팅룸 구독요청
//            // header정보에서 구독 destination정보를 얻고, roomId를 추출한다.
//            String roomId = crewChatService.getRoomId(Optional.ofNullable((String) message.getHeaders().get("simpDestination")).orElse("InvalidRoomId"));
//            String uri = Utils.getUriWithoutRoomId(Optional.ofNullable((String) message.getHeaders().get("simpDestination")).orElse("InvalidRoomId"));
//            // 채팅방에 들어온 클라이언트 sessionId를 roomId와 맵핑해 놓는다.(나중에 특정 세션이 어떤 채팅방에 들어가 있는지 알기 위함)
//            String sessionId = (String) message.getHeaders().get("simpSessionId");
//            chatRoomRepository.setUserEnterInfo(sessionId, roomId);
//            // 채팅방의 인원수를 +1한다.
//            chatRoomRepository.plusUserCount(roomId);
//            // 클라이언트 입장 메시지를 채팅방에 발송한다.(redis publish)
//            String name = Optional.ofNullable((Principal) message.getHeaders().get("simpUser")).map(Principal::getName).orElse("UnknownUser");
//            if ("plogging".equals(uri)) {
//                ploggingChatService.sendChatMessage(PloggingChatMessage.builder().type(MessageType.ENTER).roomId(roomId).sender(name).build());
//            } else {
//                crewChatService.sendChatMessage(new ChatMessage(MessageType.ENTER,roomId,name,"",null));
//            }
//            log.info("SUBSCRIBED {}, {}", name, roomId);
//        } else if (StompCommand.DISCONNECT == accessor.getCommand()) { // Websocket 연결 종료
//            // 연결이 종료된 클라이언트 sesssionId로 채팅방 id를 얻는다.
//            String sessionId = (String) message.getHeaders().get("simpSessionId");
//            String roomId = chatRoomRepository.getUserEnterRoomId(sessionId);
//            String uri = Utils.getUriWithoutRoomId(Optional.ofNullable((String) message.getHeaders().get("simpDestination")).orElse("InvalidRoomId"));
//            // 채팅방의 인원수를 -1한다.
//            chatRoomRepository.minusUserCount(roomId);
//            // 클라이언트 퇴장 메시지를 채팅방에 발송한다.(redis publish)
//            String name = Optional.ofNullable((Principal) message.getHeaders().get("simpUser")).map(Principal::getName).orElse("UnknownUser");
//            if ("plogging".equals(uri)) {
//                ploggingChatService.sendChatMessage(PloggingChatMessage.builder().type(MessageType.QUIT).roomId(roomId).sender(name).build());
//            } else {
//                crewChatService.sendChatMessage(new ChatMessage(MessageType.QUIT,roomId,name,"",null));
//            }
//            // 퇴장한 클라이언트의 roomId 맵핑 정보를 삭제한다.
//            chatRoomRepository.removeUserEnterInfo(sessionId);
//            log.info("DISCONNECTED {}, {}", sessionId, roomId);
//        }
//        return message;
//    }
//
//    private String extractToken(StompHeaderAccessor accessor) {
//        String bearerToken = accessor.getFirstNativeHeader(HttpHeaders.AUTHORIZATION);
//
//        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
//            return bearerToken.substring(7);
//        }
//        return null;
//    }
//
//    public boolean isValidToken(String jwtToken) {
//        try {
//            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken) != null;
//        } catch (SignatureException ex) {
//            log.error("Invalid JWT signature");
//            throw ex;
//        } catch (MalformedJwtException ex) {
//            log.error("Invalid JWT token");
//            throw ex;
//        } catch (ExpiredJwtException ex) {
//            log.error("Expired JWT token");
//            throw ex;
//        } catch (UnsupportedJwtException ex) {
//            log.error("Unsupported JWT token");
//            throw ex;
//        } catch (IllegalArgumentException ex) {
//            log.error("JWT claims string is empty.");
//            throw ex;
//        }catch (Exception e) {
//            throw e;
//        }
//    }
//}
