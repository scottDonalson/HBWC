package rocks.hbwc.hbwc_spring_react.services;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import rocks.hbwc.hbwc_spring_react.data.entities.ParentEntity;
import rocks.hbwc.hbwc_spring_react.data.repositories.ParentRepository;
import rocks.hbwc.hbwc_spring_react.web.errors.NotFoundException;
import rocks.hbwc.hbwc_spring_react.web.models.Parent;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author ksdon
 **/

@Service
public class ParentService {
    private final ParentRepository parentRepository;

    public ParentService(ParentRepository parentRepository) {
        this.parentRepository = parentRepository;
    }

    public List<Parent> getAllParents(String filterEmail){
        List<Parent> parents = new ArrayList<>();
        if(StringUtils.hasLength(filterEmail)){
            ParentEntity entity = this.parentRepository.findByEmail(filterEmail);
            parents.add(this.translateDbToWeb(entity));
        } else {
            Iterable<ParentEntity> entities = this.parentRepository.findAll();
            entities.forEach(entity->{
                parents.add(this.translateDbToWeb(entity));
            });
        }
        return parents;
    }


    public Parent getParent(long parent_id) {
        Optional<ParentEntity> optional = this.parentRepository.findById(parent_id);
        if(optional.isEmpty()){
            throw new NotFoundException("wrestler not found with id");
        }
        return this.translateDbToWeb(optional.get());
    }

    public Parent createOrUpdate(Parent parent){
        ParentEntity entity = this.translateWebToDb(parent);
        entity = this.parentRepository.save(entity);
        return this.translateDbToWeb(entity);
    }

    public void deleteParent(long parent_id) {
        this.parentRepository.deleteById(parent_id);
    }

    private ParentEntity translateWebToDb(Parent parent) {
        ParentEntity entity = new ParentEntity();
        entity.setParent_id(parent.getParent_id());
        entity.setFirst_name(parent.getFirst_name());
        entity.setLast_name(parent.getLast_name());
        entity.setEmail(parent.getEmail());
        entity.setGender(parent.getGender());
        entity.setPhone_number(parent.getPhone_number());
        entity.setUsa_number(parent.getUsa_number());
        return entity;
    }


    private Parent translateDbToWeb(ParentEntity entity) {
        return new Parent(
                entity.getParent_id(),
                entity.getFirst_name(),
                entity.getLast_name(),
                entity.getUsa_number(),
                entity.getGender(),
                entity.getEmail(),
                entity.getPhone_number());

    }
}
