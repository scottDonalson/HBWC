package rocks.hbwc.hbwc_spring_react.services;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import rocks.hbwc.hbwc_spring_react.data.entities.WrestlerEntity;
import rocks.hbwc.hbwc_spring_react.data.repositories.WrestlerRepository;
import rocks.hbwc.hbwc_spring_react.web.errors.NotFoundException;
import rocks.hbwc.hbwc_spring_react.web.models.Wrestler;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author ksdon
 **/

@Service
public class WrestlerService {

    private final WrestlerRepository wrestlerRepository;

    public WrestlerService(WrestlerRepository wrestlerRepository) {
        this.wrestlerRepository = wrestlerRepository;
    }

    public List<Wrestler> getAllWrestlers(String filterEmail){
        List<Wrestler> wrestlers = new ArrayList<>();
        if(StringUtils.hasLength(filterEmail)){
            WrestlerEntity entity = this.wrestlerRepository.findByEmail(filterEmail);
            wrestlers.add(this.translateDbToWeb(entity));
        } else {
            Iterable<WrestlerEntity> entities = this.wrestlerRepository.findAll();
            entities.forEach(entity->{
                wrestlers.add(this.translateDbToWeb(entity));
            });
        }
        return wrestlers;
    }


    public Wrestler getWrestler(long wrestler_id) {
        Optional<WrestlerEntity> optional = this.wrestlerRepository.findById(wrestler_id);
        if(optional.isEmpty()){
            throw new NotFoundException("wrestler not found with id");
        }
        return this.translateDbToWeb(optional.get());
    }

    public Wrestler createOrUpdate(Wrestler wrestler){
        WrestlerEntity entity = this.translateWebToDb(wrestler);
        entity = this.wrestlerRepository.save(entity);
        return this.translateDbToWeb(entity);
    }

    public void deleteWrestler(long wrestler_id) {
        this.wrestlerRepository.deleteById(wrestler_id);
    }

    private WrestlerEntity translateWebToDb(Wrestler wrestler) {
        WrestlerEntity entity = new WrestlerEntity();
        entity.setWrestler_id(wrestler.getWrestler_id());
        entity.setFirst_name(wrestler.getFirst_name());
        entity.setLast_name(wrestler.getLast_name());
        entity.setEmail(wrestler.getEmail());
        entity.setGender(wrestler.getGender());
        entity.setBirth_date(wrestler.getBirth_date());
        entity.setPhone_number(wrestler.getPhone_number());
        entity.setSchool(wrestler.getSchool());
        entity.setUsa_number(wrestler.getUsa_number());
        return entity;
    }


    private Wrestler translateDbToWeb(WrestlerEntity entity) {
        return new Wrestler(
                entity.getWrestler_id(),
                entity.getFirst_name(),
                entity.getLast_name(),
                entity.getUsa_number(),
                entity.getGender(),
                entity.getSchool(),
                entity.getBirth_date(),
                entity.getEmail(),
                entity.getPhone_number());

    }
}