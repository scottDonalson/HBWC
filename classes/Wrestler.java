package rocks.hbwc.hbwc_spring_react.web.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

/**
 * @author ksdon
 **/

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Wrestler {

    private long wrestler_id;
    private String first_name;
    private String last_name;
    private String usa_number;
    private String gender;
    private String school;
    private Date birth_date;
    private String email;
    private String phone_number;



}
