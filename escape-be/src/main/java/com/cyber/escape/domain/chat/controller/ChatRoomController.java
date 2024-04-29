package com.cyber.escape.domain.chat.controller;


import com.cyber.escape.domain.chat.dto.ChatRoomDto;
import com.cyber.escape.domain.chat.service.ChatRoomService;
import com.cyber.escape.global.common.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat")
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    public ChatRoomController(ChatRoomService chatRoomService){
        this.chatRoomService = chatRoomService;
    }

    @PostMapping("")
    public ApiResponse<ChatRoomDto.ChatRoomResDto> createRoom(@RequestBody ChatRoomDto.ChatRoomReqDto req){
        return new ApiResponse(HttpStatus.CREATED.value(), "채팅방이 생성되었습니다.", chatRoomService.createChatRoom(req));
    }





}
