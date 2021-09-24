package com.timberliu.chat.server.bean.convert;

import com.timberliu.chat.server.bean.dto.auth.AuthAccessTokenRespDTO;
import com.timberliu.chat.server.bean.dto.user.UserLoginReqDTO;
import com.timberliu.chat.server.bean.dto.user.UserLoginRespDTO;
import com.timberliu.chat.server.dao.mysql.entity.UserInfoEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * @author liujie
 * @date 2021/9/23
 */
@Mapper
public interface UserConvert {

	UserConvert INSTANCE = Mappers.getMapper(UserConvert.class);

	UserInfoEntity convert(UserLoginReqDTO userLoginReqDTO);

	UserLoginRespDTO convert(UserInfoEntity userInfoEntity, AuthAccessTokenRespDTO accessTokenRespDTO);

}
