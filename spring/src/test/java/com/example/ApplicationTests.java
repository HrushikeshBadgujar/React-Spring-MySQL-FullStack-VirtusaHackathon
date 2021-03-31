package com.example;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
@SpringBootTest
class ApplicationTests {

	@Autowired
    private TestEntityManager entityManager;
     
    @Autowired
    private UserRepo repo;

	@Test
	void contextLoads() {
	}

// 	@Test
// 	public void testCreateUser() {
//     UserModel user = new UserModel();
//     user.setEmail("ravikumar@gmail.com");
//     user.setPassword("ravi2020");
//     user.setFirstName("Ravi");
//     user.setLastName("Kumar");
// 	user.setMobileNo()
// 	user.setRole()
// 	user.setActive()
     
//     UserModel savedUser = repo.save(user);
     
//     UserModel existUser = entityManager.find(UserModel.class, savedUser.getId());
     
//     assertThat(user.getEmail()).isEqualTo(existUser.getEmail());
     
// }

}
