package rocks.hbwc.hbwc_spring_react.web.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author ksdon
 **/

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Parent {

    private long parent_id;
    private String first_name;
    private String last_name;
    private String usa_number;
    private String gender;
    private String email;
    private String phone_number;


}
